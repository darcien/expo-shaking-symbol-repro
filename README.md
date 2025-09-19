# Expo Shaking Symbol Repro

Minimal repro for prod bundling failure when
`EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH` is enabled.

`EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH` is enabled for [tree shaking](https://docs.expo.dev/guides/tree-shaking/).

## Setup steps

Install dependencies
```shell
pnpm install
```

Build JS bundle (any platform, this example use web)
```shell
pnpm build:web
```

See error in build output
```log
| node:internal/child_process/serialization:114
|     ser.writeValue(message);
|         ^
|
| Error: Symbol() could not be cloned.
|     at writeChannelMessage (node:internal/child_process/serialization:114:9)
|     at target._send (node:internal/child_process:851:17)
|     at target.send (node:internal/child_process:751:19)
|     at reportSuccess (/Users/darcien/projects/expo-shaking-symbol-repro/node_modules/jest-worker/build/workers/processChild.js:82:11)
|     at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
```

Crash location:
```js
// node_modules/jest-worker/build/workers/processChild.js

function reportSuccess(result) {
  if (!process || !process.send) {
    throw new Error('Child can only be used on a forked process');
  }
  process.send([_types.PARENT_MESSAGE_OK, result]);
  //      ^throws here
}
```

`result` does contain `Symbol()`.
And it seems like an AST of a transformed source file.
([./components/ui/button.tsx](./components/ui/button.tsx) in this case,
but crash could also happens with other components).

See [./result.js](./result.js) for the full JS object (Warning: it's almost 8K lines).
And [./block.js](./block.js) for the small snippet containing the `Symbol()`.

```js
// Snippet of the AST containing the Symbol()
const node = {
  type: "ExpressionStatement",
  expression: {
    type: "AssignmentExpression",
    operator: "=",
    left: {
      type: "Identifier",
      name: "props",
    },
    right: {
      type: "Identifier",
      name: "t3",
      loc: Symbol(),
    },
  },
}
```

```js
// The code for that AST roughly looks like this:
const { className, variant, size, ...t3 } = t0;
props = t3; // <- This assignment creates the AST with Symbol()
```

```tsx
// components/ui/button.tsx:95

// Original code before transformed:
function Button({ className, variant, size, ...props }: ButtonProps) {
  // ...
}
```

- Dev build or disabling `EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH` builds with no error.

## Very minimal repro

Ok, I've pinpointed the exact TS code that triggers the error:
```tsx
// components/ui/repro.tsx
import { View, ViewProps } from "react-native";

export type ReproProps = Pick<ViewProps, "id" | "role">;

// If you do destructure and rest expression, it fails.
export function Repro({ id, ...props }: ReproProps) {
  return <View {...props} />;
}

// But not if you just do rest expression.
export function NotRepro({ ...props }: ReproProps) {
  return <View {...props} />;
}
```

## Going deeper

I dug around Expo code, specifically in the `@expo/metro-config`.
Internally, it calls `transformSync()` from `@babel/core` [here](https://github.com/expo/expo/blob/f2c87fefa47b7520dc823d92343f589715651edb/packages/%40expo/metro-config/src/babel-transformer.ts#L192).

Since on the Metro side it just calls babel's transform, we need to check babel next.
@kitten already pointed out this is triggered by `reactCompiler`.

Following that clue, we can trace where the `reactCompiler` is used.
1. `reactCompiler` mapped to [`supportsReactCompiler`](https://github.com/expo/expo/blob/f2c87fefa47b7520dc823d92343f589715651edb/packages/%40expo/metro-config/src/babel-transformer.ts#L129)
2. `supportsReactCompiler` mapped to [`isReactCompilerEnabled`](https://github.com/expo/expo/blob/f2c87fefa47b7520dc823d92343f589715651edb/packages/babel-preset-expo/src/index.ts#L151) via [`getReactCompiler`](https://github.com/expo/expo/blob/f2c87fefa47b7520dc823d92343f589715651edb/packages/babel-preset-expo/build/common.js#L111-L113)
3. Aha, `isReactCompilerEnabled` is used for [conditionally adding `babel-plugin-react-compiler`](https://github.com/expo/expo/blob/f2c87fefa47b7520dc823d92343f589715651edb/packages/babel-preset-expo/src/index.ts#L208-L235)

Okay, what happens if the `babel-plugin-react-compiler` is not used?
The answer is no `loc: Symbol()` in the AST.

That confirms the bug is not inside Expo side, it's from `babel-plugin-react-compiler`.

## Going even deeper

Okay, `babel-plugin-react-compiler` is pretty big, how do I even start?

I went with the brute force: grep for `loc` in the directory.
Oh, there's a lot of text match.
But it's only 91 TS files, and each file is for specific transformation.
This might be doable manually.

We also have the clue that the `loc: Symbol()` only happens on destructuring + rest operator.

Fast forward few clicks later, I found [`ExtractScopeDeclarationsFromDestructuring.ts`](https://github.com/facebook/react/blob/6eda534718d09a26d58d65c0a376e05d7e2a3358/compiler/packages/babel-plugin-react-compiler/src/ReactiveScopes/ExtractScopeDeclarationsFromDestructuring.ts)

Ooh, these looks awfully familiar:
```ts
/*
 * Destructuring statements may sometimes define some variables which are declared by the scope,
 * and others that are only used locally within the scope, for example:
 *
 * ```
 * const {x, ...rest} = value;
 * return rest;
 * ```
 *
 * --- trimmed ---
 *
 * let c_0 = $[0] !== value;
 * let rest;
 * if (c_0) {
 *    const {x, ...t0} = value; <-- replace `rest` with a temporary
 *    rest = t0; // <-- and create a separate instruction to assign that to `rest`
 *    $[0] = value;
 *    $[1] = rest;
 * } else {
 *    rest = $[1];
 * }
 * return rest;
 * ```
 *
 */
```

I went ahead and sprinked some breakpoints in this area.
And found a match.

Inside `clonePlaceToTemporary()`, it calls `createTemporaryPlace()`.

```ts
// https://github.com/facebook/react/blob/6eda534718d09a26d58d65c0a376e05d7e2a3358/compiler/packages/babel-plugin-react-compiler/src/HIR/HIRBuilder.ts#L982

export function createTemporaryPlace(
  env: Environment,
  loc: SourceLocation,
): Place {
  return {
    kind: 'Identifier',
    identifier: makeTemporaryIdentifier(env.nextIdentifierId, loc),
    reactive: false,
    effect: Effect.Unknown,
    loc: GeneratedSource,
  };
}
```

And voila, we found where the `loc: Symbol()` is coming from.

```ts
// https://github.com/facebook/react/blob/6eda534718d09a26d58d65c0a376e05d7e2a3358/compiler/packages/babel-plugin-react-compiler/src/HIR/HIR.ts#L40

/*
 * A location in a source file, intended to be used for providing diagnostic information and
 * transforming code while preserving source information (ie to emit source maps).
 *
 * `GeneratedSource` indicates that there is no single source location from which the code derives.
 */
export const GeneratedSource = Symbol();
export type SourceLocation = t.SourceLocation | typeof GeneratedSource;
```

To be 100% sure, let's patch it out.
I wrote a [patch][] to change the `loc: Symbol()` to be `loc: null` instead.
And after that, Expo can bundle JS successfully.

[patch]: ./patches/babel-plugin-react-compiler.patch

If you want to try the patch in this repro repo:
- Open `pnpm-workspace.yaml`
- Uncomment the `patchedDependencies` section
- Rerun `pnpm install` to apply the patch
- Rerun `pnpm build:web` to see the JS bundling now succeed with the patch

## What's next?

I don't know yet, maybe discuss it first in the [Expo issue][expo-issue] for the next step.
The `loc: Symbol()` on the `babel-plugin-react-compiler` looks intentional
since there's no original location and they want to mark the node for that?

According to [Babel AST spec](https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md#node-objects), loc can only be `SourceLocation` or `null`.
So the `Symbol()` one is invalid.

```ts
interface Node {
  type: string;
  loc: SourceLocation | null;
}
```

[expo-issue]: https://github.com/expo/expo/issues/39431

## Notes

There are warnings from reanimated babel plugin during build,
but they are safe to ignore for this repro.
(Can disable the `nativewind/babel` and symbol error still happens.)

```log
| [Reanimated] Seems like you are using a Babel plugin `react-native-reanimated/plugin`. It was moved to `react-native-worklets` package. Please use `react-native-worklets/plugin` instead.
```

It's coming from `nativewind/babel` babel preset,
already [fixed upstream](https://github.com/nativewind/nativewind/pull/1546) but unreleased.

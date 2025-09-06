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

```js
// components/ui/button.tsx:95

// Original code before transformed:
function Button({ className, variant, size, ...props }: ButtonProps) {
  // ...
}
```

- Dev build or disabling `EXPO_UNSTABLE_METRO_OPTIMIZE_GRAPH` builds with no error.

## Notes

There are warnings from reanimated babel plugin during build,
but they are safe to ignore for this repro.
(Can disable the `nativewind/babel` and symbol error still happens.)

```log
| [Reanimated] Seems like you are using a Babel plugin `react-native-reanimated/plugin`. It was moved to `react-native-worklets` package. Please use `react-native-worklets/plugin` instead.
```

It's coming from `nativewind/babel` babel preset,
already [fixed upstream](https://github.com/nativewind/nativewind/pull/1546) but unreleased.

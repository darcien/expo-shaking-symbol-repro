const babelTransformerPath =
  "./node_modules/@expo/metro-config/build/babel-transformer.js";
const transformer = require(babelTransformerPath);

const babelTransformArgs = {
  filename: "components/ui/repro.tsx",
  options: {
    customTransformOptions: {
      optimize: true,
      engine: "hermes",
      routerRoot: "app",
      reactCompiler: "true",
    },
    dev: false,
    hot: true,
    inlinePlatform: true,
    minify: true,
    platform: "web",
    unstable_transformProfile: "hermes-stable",
    experimentalImportSupport: true,
    unstable_disableES6Transforms: false,
    unstable_memoizeInlineRequires: false,
    unstable_nonMemoizedInlineRequires: [],
    nonInlinedRequires: [
      "React",
      "react",
      "react/jsx-dev-runtime",
      "react/jsx-runtime",
      "react-compiler-runtime",
      "react-native",
    ],
    type: "module",
    enableBabelRCLookup: true,
    enableBabelRuntime: undefined,
    hermesParser: false,
    projectRoot: "/Users/darcien/projects/expo-shaking-symbol-repro",
    publicPath: "/assets?export_path=/assets",
    globalPrefix: "",
  },
  plugins: [
    function functionMapBabelPlugin() {
      return {
        visitor: {},
        // pre: ({ path, metadata, opts }) => {
        //   const { filename } = nullthrows(opts);
        //   const encoder = new MappingEncoder();
        //   const visitor = getFunctionMapVisitor(
        //     {
        //       filename,
        //     },
        //     (mapping) => encoder.push(mapping)
        //   );
        //   invariant(
        //     path && t.isProgram(path.node),
        //     "path missing or not a program node"
        //   );
        //   const programPath = path;
        //   visitor.enter(programPath);
        //   programPath.traverse({
        //     Function: visitor,
        //     Class: visitor,
        //   });
        //   visitor.exit(programPath);
        //   const metroMetadata = metadata;
        //   const functionMap = encoder.getResult();
        //   if (!metroMetadata.metro) {
        //     metroMetadata.metro = {
        //       functionMap,
        //     };
        //   } else {
        //     metroMetadata.metro.functionMap = functionMap;
        //   }
        // },
      };
    },
    function importLocationsPlugin({ types: t }) {
      return {
        visitor: {
          // ImportDeclaration(path, { importDeclarationLocs }) {
          //   if (path.node.importKind !== "type" && path.node.loc != null) {
          //     importDeclarationLocs.add(locToKey(path.node.loc));
          //   }
          // },
          // ExportDeclaration(path, { importDeclarationLocs }) {
          //   if (
          //     path.node.source != null &&
          //     path.node.exportKind !== "type" &&
          //     path.node.loc != null
          //   ) {
          //     importDeclarationLocs.add(locToKey(path.node.loc));
          //   }
          // },
          // Program(path, state) {
          //   state.importDeclarationLocs = new Set();
          //   const metroMetadata = state.file.metadata;
          //   if (!metroMetadata.metro) {
          //     metroMetadata.metro = {
          //       unstable_importDeclarationLocs: state.importDeclarationLocs,
          //     };
          //   } else {
          //     metroMetadata.metro.unstable_importDeclarationLocs =
          //       state.importDeclarationLocs;
          //   }
          // },
        },
      };
    },
  ],
  src: `import { View, ViewProps } from "react-native";

export type ReproProps = Pick<ViewProps, "id" | "role">;

export function Repro({ id, ...props }: ReproProps) {
  return <View {...props} />;
}

export function NotRepro({ ...props }: ReproProps) {
  return <View {...props} />;
}
`,
};

const transformResult = transformer.transform(babelTransformArgs);
const ast = transformResult.ast;
debugger;
console.log("This AST has loc: Symbol()", ast != null);

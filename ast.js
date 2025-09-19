export const ast = {
  type: "File",
  start: 0,
  end: 279,
  loc: {
    start: {
      line: 1,
      column: 0,
      index: 0,
    },
    end: {
      line: 12,
      column: 0,
      index: 279,
    },
    filename: undefined,
    identifierName: undefined,
  },
  errors: [],
  program: {
    type: "Program",
    start: 0,
    end: 279,
    loc: {
      start: {
        line: 1,
        column: 0,
        index: 0,
      },
      end: {
        line: 12,
        column: 0,
        index: 279,
      },
      filename: undefined,
      identifierName: undefined,
    },
    sourceType: "module",
    interpreter: null,
    body: [
      {
        type: "ImportDeclaration",
        specifiers: [
          {
            type: "ImportSpecifier",
            local: {
              type: "Identifier",
              name: "_c",
            },
            imported: {
              type: "Identifier",
              name: "c",
            },
          },
        ],
        source: {
          type: "StringLiteral",
          value: "react/compiler-runtime",
        },
      },
      {
        type: "ImportDeclaration",
        specifiers: [
          {
            type: "ImportDefaultSpecifier",
            local: {
              type: "Identifier",
              name: "View",
            },
          },
        ],
        source: {
          type: "StringLiteral",
          value: "react-native-web/dist/exports/View",
        },
        leadingComments: [],
        trailingComments: [],
      },
      {
        type: "ImportDeclaration",
        specifiers: [
          {
            type: "ImportSpecifier",
            local: {
              type: "Identifier",
              name: "_jsx",
            },
            imported: {
              type: "Identifier",
              name: "jsx",
            },
          },
        ],
        source: {
          type: "StringLiteral",
          value: "react-native-css-interop/jsx-runtime",
        },
      },
      {
        type: "ExportNamedDeclaration",
        start: 107,
        end: 192,
        loc: {
          start: {
            line: 5,
            column: 0,
            index: 107,
          },
          end: {
            line: 7,
            column: 1,
            index: 192,
          },
          filename: undefined,
          identifierName: undefined,
        },
        exportKind: "value",
        specifiers: [],
        source: null,
        attributes: [],
        declaration: {
          type: "FunctionDeclaration",
          id: {
            type: "Identifier",
            name: "Repro",
          },
          loc: {
            start: {
              line: 5,
              column: 7,
              index: 114,
            },
            end: {
              line: 7,
              column: 1,
              index: 192,
            },
            filename: undefined,
            identifierName: undefined,
          },
          async: false,
          generator: false,
          params: [
            {
              type: "Identifier",
              name: "t0",
            },
          ],
          body: {
            type: "BlockStatement",
            body: [
              {
                type: "VariableDeclaration",
                kind: "const",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: {
                      type: "Identifier",
                      name: "$",
                    },
                    init: {
                      type: "CallExpression",
                      callee: {
                        type: "Identifier",
                        name: "_c",
                      },
                      arguments: [
                        {
                          type: "NumericLiteral",
                          value: 4,
                        },
                      ],
                      typeArguments: null,
                      typeParameters: null,
                    },
                  },
                ],
              },
              {
                type: "VariableDeclaration",
                kind: "let",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: {
                      type: "Identifier",
                      name: "props",
                    },
                    init: null,
                  },
                ],
              },
              {
                type: "IfStatement",
                test: {
                  type: "BinaryExpression",
                  operator: "!==",
                  left: {
                    type: "MemberExpression",
                    object: {
                      type: "Identifier",
                      name: "$",
                    },
                    property: {
                      type: "NumericLiteral",
                      value: 0,
                    },
                    computed: true,
                    optional: null,
                  },
                  right: {
                    type: "Identifier",
                    name: "t0",
                  },
                },
                consequent: {
                  type: "BlockStatement",
                  body: [
                    {
                      type: "VariableDeclaration",
                      kind: "const",
                      declarations: [
                        {
                          type: "VariableDeclarator",
                          id: {
                            type: "ObjectPattern",
                            properties: [
                              {
                                type: "ObjectProperty",
                                key: {
                                  type: "Identifier",
                                  name: "id",
                                },
                                value: {
                                  type: "Identifier",
                                  name: "id",
                                },
                                computed: false,
                                shorthand: true,
                                decorators: null,
                              },
                              {
                                type: "RestElement",
                                argument: {
                                  type: "Identifier",
                                  name: "t1",
                                },
                              },
                            ],
                          },
                          init: {
                            type: "Identifier",
                            name: "t0",
                            loc: {
                              start: {
                                line: 5,
                                column: 22,
                                index: 129,
                              },
                              end: {
                                line: 5,
                                column: 50,
                                index: 157,
                              },
                              filename: undefined,
                              identifierName: undefined,
                            },
                          },
                        },
                      ],
                      loc: {
                        start: {
                          line: 5,
                          column: 22,
                          index: 129,
                        },
                        end: {
                          line: 5,
                          column: 50,
                          index: 157,
                        },
                        filename: undefined,
                        identifierName: undefined,
                      },
                    },
                    {
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
                          name: "t1",
                          loc: Symbol(),
                        },
                      },
                      loc: {
                        start: {
                          line: 5,
                          column: 22,
                          index: 129,
                        },
                        end: {
                          line: 5,
                          column: 50,
                          index: 157,
                        },
                        filename: undefined,
                        identifierName: undefined,
                      },
                    },
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 0,
                          },
                          computed: true,
                          optional: null,
                        },
                        right: {
                          type: "Identifier",
                          name: "t0",
                        },
                      },
                    },
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 1,
                          },
                          computed: true,
                          optional: null,
                        },
                        right: {
                          type: "Identifier",
                          name: "props",
                        },
                      },
                    },
                  ],
                  directives: [],
                },
                alternate: {
                  type: "BlockStatement",
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "Identifier",
                          name: "props",
                        },
                        right: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 1,
                          },
                          computed: true,
                          optional: null,
                        },
                      },
                    },
                  ],
                  directives: [],
                },
              },
              {
                type: "VariableDeclaration",
                kind: "let",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: {
                      type: "Identifier",
                      name: "t1",
                    },
                    init: null,
                  },
                ],
              },
              {
                type: "IfStatement",
                test: {
                  type: "BinaryExpression",
                  operator: "!==",
                  left: {
                    type: "MemberExpression",
                    object: {
                      type: "Identifier",
                      name: "$",
                    },
                    property: {
                      type: "NumericLiteral",
                      value: 2,
                    },
                    computed: true,
                    optional: null,
                  },
                  right: {
                    type: "Identifier",
                    name: "props",
                  },
                },
                consequent: {
                  type: "BlockStatement",
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "Identifier",
                          name: "t1",
                        },
                        right: {
                          type: "CallExpression",
                          callee: {
                            type: "Identifier",
                            name: "_jsx",
                          },
                          arguments: [
                            {
                              type: "Identifier",
                              name: "View",
                              loc: {
                                start: {
                                  line: 6,
                                  column: 10,
                                  index: 171,
                                },
                                end: {
                                  line: 6,
                                  column: 14,
                                  index: 175,
                                },
                                filename: undefined,
                                identifierName: undefined,
                              },
                            },
                            {
                              type: "ObjectExpression",
                              properties: [
                                {
                                  type: "SpreadElement",
                                  argument: {
                                    type: "Identifier",
                                    name: "props",
                                    loc: {
                                      start: {
                                        line: 6,
                                        column: 19,
                                        index: 180,
                                      },
                                      end: {
                                        line: 6,
                                        column: 24,
                                        index: 185,
                                      },
                                      filename: undefined,
                                      identifierName: "props",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                          typeAnnotation: undefined,
                          typeParameters: null,
                          returnType: undefined,
                          start: undefined,
                          loc: {
                            start: {
                              line: 6,
                              column: 9,
                              index: 170,
                            },
                            end: {
                              line: 6,
                              column: 28,
                              index: 189,
                            },
                            filename: undefined,
                            identifierName: undefined,
                          },
                          end: undefined,
                          trailingComments: [],
                          leadingComments: [],
                          innerComments: [],
                          typeArguments: null,
                        },
                      },
                      loc: {
                        start: {
                          line: 6,
                          column: 9,
                          index: 170,
                        },
                        end: {
                          line: 6,
                          column: 28,
                          index: 189,
                        },
                        filename: undefined,
                        identifierName: undefined,
                      },
                    },
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 2,
                          },
                          computed: true,
                          optional: null,
                        },
                        right: {
                          type: "Identifier",
                          name: "props",
                        },
                      },
                    },
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 3,
                          },
                          computed: true,
                          optional: null,
                        },
                        right: {
                          type: "Identifier",
                          name: "t1",
                        },
                      },
                    },
                  ],
                  directives: [],
                },
                alternate: {
                  type: "BlockStatement",
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "Identifier",
                          name: "t1",
                        },
                        right: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 3,
                          },
                          computed: true,
                          optional: null,
                        },
                      },
                    },
                  ],
                  directives: [],
                },
              },
              {
                type: "ReturnStatement",
                argument: {
                  type: "Identifier",
                  name: "t1",
                  loc: {
                    start: {
                      line: 6,
                      column: 9,
                      index: 170,
                    },
                    end: {
                      line: 6,
                      column: 28,
                      index: 189,
                    },
                    filename: undefined,
                    identifierName: undefined,
                  },
                },
              },
            ],
            directives: [],
          },
          trailingComments: [],
          leadingComments: [],
          innerComments: [],
          predicate: null,
        },
        leadingComments: undefined,
        innerComments: undefined,
        trailingComments: undefined,
      },
      {
        type: "ExportNamedDeclaration",
        start: 194,
        end: 278,
        loc: {
          start: {
            line: 9,
            column: 0,
            index: 194,
          },
          end: {
            line: 11,
            column: 1,
            index: 278,
          },
          filename: undefined,
          identifierName: undefined,
        },
        exportKind: "value",
        specifiers: [],
        source: null,
        attributes: [],
        declaration: {
          type: "FunctionDeclaration",
          id: {
            type: "Identifier",
            name: "NotRepro",
          },
          loc: {
            start: {
              line: 9,
              column: 7,
              index: 201,
            },
            end: {
              line: 11,
              column: 1,
              index: 278,
            },
            filename: undefined,
            identifierName: undefined,
          },
          async: false,
          generator: false,
          params: [
            {
              type: "Identifier",
              name: "t0",
            },
          ],
          body: {
            type: "BlockStatement",
            body: [
              {
                type: "VariableDeclaration",
                kind: "const",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: {
                      type: "Identifier",
                      name: "$",
                    },
                    init: {
                      type: "CallExpression",
                      callee: {
                        type: "Identifier",
                        name: "_c",
                      },
                      arguments: [
                        {
                          type: "NumericLiteral",
                          value: 4,
                        },
                      ],
                      typeArguments: null,
                      typeParameters: null,
                    },
                  },
                ],
              },
              {
                type: "VariableDeclaration",
                kind: "let",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: {
                      type: "Identifier",
                      name: "props",
                    },
                    init: null,
                  },
                ],
              },
              {
                type: "IfStatement",
                test: {
                  type: "BinaryExpression",
                  operator: "!==",
                  left: {
                    type: "MemberExpression",
                    object: {
                      type: "Identifier",
                      name: "$",
                    },
                    property: {
                      type: "NumericLiteral",
                      value: 0,
                    },
                    computed: true,
                    optional: null,
                  },
                  right: {
                    type: "Identifier",
                    name: "t0",
                  },
                },
                consequent: {
                  type: "BlockStatement",
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "ObjectPattern",
                          properties: [
                            {
                              type: "RestElement",
                              argument: {
                                type: "Identifier",
                                name: "props",
                              },
                            },
                          ],
                        },
                        right: {
                          type: "Identifier",
                          name: "t0",
                          loc: {
                            start: {
                              line: 9,
                              column: 25,
                              index: 219,
                            },
                            end: {
                              line: 9,
                              column: 49,
                              index: 243,
                            },
                            filename: undefined,
                            identifierName: undefined,
                          },
                        },
                      },
                      loc: {
                        start: {
                          line: 9,
                          column: 25,
                          index: 219,
                        },
                        end: {
                          line: 9,
                          column: 49,
                          index: 243,
                        },
                        filename: undefined,
                        identifierName: undefined,
                      },
                    },
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 0,
                          },
                          computed: true,
                          optional: null,
                        },
                        right: {
                          type: "Identifier",
                          name: "t0",
                        },
                      },
                    },
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 1,
                          },
                          computed: true,
                          optional: null,
                        },
                        right: {
                          type: "Identifier",
                          name: "props",
                        },
                      },
                    },
                  ],
                  directives: [],
                },
                alternate: {
                  type: "BlockStatement",
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "Identifier",
                          name: "props",
                        },
                        right: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 1,
                          },
                          computed: true,
                          optional: null,
                        },
                      },
                    },
                  ],
                  directives: [],
                },
              },
              {
                type: "VariableDeclaration",
                kind: "let",
                declarations: [
                  {
                    type: "VariableDeclarator",
                    id: {
                      type: "Identifier",
                      name: "t1",
                    },
                    init: null,
                  },
                ],
              },
              {
                type: "IfStatement",
                test: {
                  type: "BinaryExpression",
                  operator: "!==",
                  left: {
                    type: "MemberExpression",
                    object: {
                      type: "Identifier",
                      name: "$",
                    },
                    property: {
                      type: "NumericLiteral",
                      value: 2,
                    },
                    computed: true,
                    optional: null,
                  },
                  right: {
                    type: "Identifier",
                    name: "props",
                  },
                },
                consequent: {
                  type: "BlockStatement",
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "Identifier",
                          name: "t1",
                        },
                        right: {
                          type: "CallExpression",
                          callee: {
                            type: "Identifier",
                            name: "_jsx",
                          },
                          arguments: [
                            {
                              type: "Identifier",
                              name: "View",
                              loc: {
                                start: {
                                  line: 10,
                                  column: 10,
                                  index: 257,
                                },
                                end: {
                                  line: 10,
                                  column: 14,
                                  index: 261,
                                },
                                filename: undefined,
                                identifierName: undefined,
                              },
                            },
                            {
                              type: "ObjectExpression",
                              properties: [
                                {
                                  type: "SpreadElement",
                                  argument: {
                                    type: "Identifier",
                                    name: "props",
                                    loc: {
                                      start: {
                                        line: 10,
                                        column: 19,
                                        index: 266,
                                      },
                                      end: {
                                        line: 10,
                                        column: 24,
                                        index: 271,
                                      },
                                      filename: undefined,
                                      identifierName: "props",
                                    },
                                  },
                                },
                              ],
                            },
                          ],
                          typeAnnotation: undefined,
                          typeParameters: null,
                          returnType: undefined,
                          start: undefined,
                          loc: {
                            start: {
                              line: 10,
                              column: 9,
                              index: 256,
                            },
                            end: {
                              line: 10,
                              column: 28,
                              index: 275,
                            },
                            filename: undefined,
                            identifierName: undefined,
                          },
                          end: undefined,
                          trailingComments: [],
                          leadingComments: [],
                          innerComments: [],
                          typeArguments: null,
                        },
                      },
                      loc: {
                        start: {
                          line: 10,
                          column: 9,
                          index: 256,
                        },
                        end: {
                          line: 10,
                          column: 28,
                          index: 275,
                        },
                        filename: undefined,
                        identifierName: undefined,
                      },
                    },
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 2,
                          },
                          computed: true,
                          optional: null,
                        },
                        right: {
                          type: "Identifier",
                          name: "props",
                        },
                      },
                    },
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 3,
                          },
                          computed: true,
                          optional: null,
                        },
                        right: {
                          type: "Identifier",
                          name: "t1",
                        },
                      },
                    },
                  ],
                  directives: [],
                },
                alternate: {
                  type: "BlockStatement",
                  body: [
                    {
                      type: "ExpressionStatement",
                      expression: {
                        type: "AssignmentExpression",
                        operator: "=",
                        left: {
                          type: "Identifier",
                          name: "t1",
                        },
                        right: {
                          type: "MemberExpression",
                          object: {
                            type: "Identifier",
                            name: "$",
                          },
                          property: {
                            type: "NumericLiteral",
                            value: 3,
                          },
                          computed: true,
                          optional: null,
                        },
                      },
                    },
                  ],
                  directives: [],
                },
              },
              {
                type: "ReturnStatement",
                argument: {
                  type: "Identifier",
                  name: "t1",
                  loc: {
                    start: {
                      line: 10,
                      column: 9,
                      index: 256,
                    },
                    end: {
                      line: 10,
                      column: 28,
                      index: 275,
                    },
                    filename: undefined,
                    identifierName: undefined,
                  },
                },
              },
            ],
            directives: [],
          },
          trailingComments: [],
          leadingComments: [],
          innerComments: [],
          predicate: null,
        },
        leadingComments: undefined,
        innerComments: undefined,
        trailingComments: undefined,
      },
    ],
    directives: [],
    extra: {
      topLevelAwait: false,
    },
    leadingComments: undefined,
    innerComments: undefined,
    trailingComments: undefined,
  },
  comments: [],
  leadingComments: undefined,
  innerComments: undefined,
  trailingComments: undefined,
};

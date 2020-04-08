const { plugin: addCodegenPlugin } = require('@graphql-codegen/add');

module.exports = {
  resolve: 'gatsby-plugin-graphql-codegen',
  options: {
    codegenConfig: {
      typesPrefix: 'Graphql',
      immutableTypes: true,
      avoidOptionals: { object: true },
      maybeValue: 'T',
      preResolveTypes: true,
      addUnderscoreToArgsType: false,
    },
    codegenPlugins: [
      {
        resolve: addCodegenPlugin,
        options: { content: '/* File automatically generated from gatsby-plugin-graphql-codegen */' },
      },
      { resolve: addCodegenPlugin, options: { content: '/* eslint-disable */' } },
    ],
  },
};

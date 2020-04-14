const { join } = require('path');
const { isDev } = require('../env');

module.exports = [
  'gatsby-plugin-typescript',
  isDev && require('./graphqlCodegenPlugin'),
  'gatsby-plugin-eslint',
  'gatsby-plugin-postcss',
  'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-source-filesystem',
    options: { name: 'images', path: join(process.cwd(), '/src/images') },
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  require('./manifestPlugin'),
  require('./contentfulPlugin'),
].filter(Boolean);

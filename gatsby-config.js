const { isDev } = require('./config/env');

if (isDev) {
  // eslint-disable-next-line import/no-extraneous-dependencies
  require('dotenv').config();
}

const plugins = require('./config/plugins');
const siteMetadata = require('./config/siteMetadata');

module.exports = {
  siteMetadata,
  plugins,
  pathPrefix: '/travel-blog',
};

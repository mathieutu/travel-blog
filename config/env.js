const isProd = process.env.NODE_ENV === 'production' && !process.env.FORCE_DEV;
const isDev = !isProd;

module.exports = {
  isDev,
  isProd,
};

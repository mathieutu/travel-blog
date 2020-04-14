const isProd = process.env.NODE_ENV === 'production';
const isDev = !isProd;


module.exports = {
  isDev,
  isProd,
};

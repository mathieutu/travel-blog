const { isDev } = require('./config/env');

module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    isDev && require('tailwind-ts')({ exportClassNamesHelper: true }),
  ],
};

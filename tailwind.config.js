const { isDev } = require('./config/env');

module.exports = {
  theme: {
    inset: {
      '-33': '-33.3%',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    isDev && require('tailwind-ts')({ exportClassNamesHelper: true }),
  ].filter(Boolean),
};

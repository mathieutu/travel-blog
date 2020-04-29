const { isDev } = require('./config/env');

module.exports = {
  theme: {
    inset: {
      '-1/3': '-33.3%',
      '1/2': '50%',
      '2/3': '66.7%',
      '1/1': '100%',
      'calcButton': 'calc(100% - 4rem)',
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    isDev && require('tailwind-ts')({ exportClassNamesHelper: true }),
  ].filter(Boolean),
};

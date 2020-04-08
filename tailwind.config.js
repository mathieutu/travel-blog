module.exports = {
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui'),
    require('tailwind-ts')({ exportClassNamesHelper: true }),
  ],
};

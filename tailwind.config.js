// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Roboto', ...defaultTheme.fontFamily.mono]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './dist/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      chambray: {
        DEFAULT: '#304392',
        50: '#BEC6EA',
        100: '#ABB6E3',
        200: '#8494D7',
        300: '#5E73CA',
        400: '#3D55B8',
        500: '#304392',
        600: '#23316C',
        700: '#172045',
        800: '#0A0E1F',
        900: '#000000'
      }
    },
    extend: {
      fontFamily: {
        roboto: ['Roboto']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

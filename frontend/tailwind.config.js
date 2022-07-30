const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./dist/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      DEFAULT: "1px",
      1: "1px",
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      slate: colors.slate,
      sky: colors.sky,
      zinc: colors.zinc,
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      chambray: {
        DEFAULT: "#304392",
        50: "#BEC6EA",
        100: "#ABB6E3",
        200: "#8494D7",
        300: "#5E73CA",
        400: "#3D55B8",
        500: "#304392",
        600: "#23316C",
        700: "#172045",
        800: "#0A0E1F",
        900: "#000000",
      },
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
      },
      animation: {
        fadeIn: "fadeIn .2s ease-in-out",
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 100 },
        },
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

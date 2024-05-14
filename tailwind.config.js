/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    scrollbar: {
      w: "10px",
      color: "red",
    },
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif", "Sour"],
      },
    },
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      // padding: "5rem",
      padding: {
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      // default breakpoints but with 40px removed
      screens: {
        sm: "450px",
        md: "728px",
        lg: "984px",
        xl: "1240px",
        "2xl": "1496px",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        gradient: "linear-gradient(180deg, #000D2E, #9F329F)",
      }),
      colors: {
        main: "rgba(15, 97, 255, 0.1)",
        textColor: "#94A3B8",
        primary: "#662CAE",
        secondary: "#23053B",
        inverted: "#041544",
        light: "rgba(37, 99, 235, 0.1)",
        white: "#F1F5F9",
        selectedColor: "#60A5FA",
        tagColor: "#112771",
        tagText: "#B9C2D7",
        gridLinesColor: "rgba(4, 22, 68)",
      },
      extend: {
        backgroundColor: {
          "custom-background": "#000D2E",
        },
      },
      borderColor: (theme) => ({
        DEFAULT: theme("colors.trueGray.200", "currentColor"),
      }),
      fill: (theme) => theme("colors"),
    },
  },
  plugins: [],
};

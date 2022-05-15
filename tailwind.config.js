const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./public/**/*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        // center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      fontFamily: {
        "open-sans": ['"Open Sans", sans-serif'],
        poppins: ['"Poppins", sans-serif'],
      },
      colors: {
        pink: "hsl(322, 100%, 66%)",
        "light-pink": "hsl(321, 100%, 78%)",
        "light-red": "hsl(0, 100%, 63%)",
        "very-dark-cyan": "hsl(192, 100%, 9%)",
        "very-pale-blue": "hsl(207, 100%, 98%)",
        "blue-images": "#F6FBFF",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {
      addComponents({
        ".bg-hover-brand": {
          backgroundColor: "#f3f4f6",
          "&:hover": {
            backgroundColor: "#e5e5e5",
          },
        },
        ".bg-hover": {
          backgroundColor: "hsl(322, 100%, 66%)",
          "&:hover": {
            opacity: ".9",
          },
        },
        ".bg-hover-darkside": {
          backgroundColor: "transparant",
          "&:hover": {
            backgroundColor: "#475569",
            opacity: ".3",
          },
        },
      });
    }),
  ],
};

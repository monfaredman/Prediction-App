/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      // widths: {
      //   "1/4": "25%",
      //   "1/3": "33.33333%",
      //   "1/2": "50%",
      //   "3/4": "75%",
      // },
      // height: {
      //   "1/4": "25%",
      //   "1/3": "33.33333%",
      //   "1/2": "50%",
      //   "3/4": "75%",
      // },
    },
  },
  plugins: [require("flowbite/plugin")],
};

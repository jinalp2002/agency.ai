/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // dark mode enable
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    //tailwind ma overwrite nahi tailwind ni andr navi value add karva custom design mate use thay
    extend: {
      colors: {
        primary: "#5044E5",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      colors: {
        extendcolor01: ['#0d0d0d'],
      },
      fontFamily: {
        comfortaa: ['Comfortaa', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        archivo: ['Archivo', 'sans-serif'],
      },
    },
    plugins: [],
  },
};

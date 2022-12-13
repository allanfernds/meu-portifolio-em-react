/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      extend: {
        fontFamily: {
          'roboto': ['Roboto', 'sans-serif'],
          'icones': ['Icones']
        },
    },
  },
  plugins: [],
  }
}
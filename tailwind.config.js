/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'baloo': [`Baloo-Regular`, 'sans-serif'],
        'comfortaa': ['Comfortaa', 'sans-serif']
      }
    },
  },
  plugins: [],
}
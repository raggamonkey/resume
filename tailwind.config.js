/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // generate dark: variants used by your page
  content: ["./index.html", "./src/**/*.{html,js}"], // include all html/js so classes are not purged
  theme: {
    extend: {},
  },
  plugins: [],
}

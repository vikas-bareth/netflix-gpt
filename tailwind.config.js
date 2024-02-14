/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        netflix: ['Kanit', ...defaultTheme.fontFamily.sans],
    }
    },
  },
  plugins: [],
}
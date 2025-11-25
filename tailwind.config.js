// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D2FF1F", // Neon Green
        dark: "#0C0C0C",    // Black
        grayText: "#333333",// Gray Text
        lightGray: "#F3F3F3",// Light Gray Background
        white: "#FFFFFF"
      }
    }
  },
  plugins: [],
};

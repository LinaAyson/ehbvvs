/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#C0A86C",
        primaryRed: "#BE2127",
        star: "#fbbc04",
        primaryGrey: "#8F8F8F",
        secondaryGrey: "#141414",
      },
    },
  },
  plugins: [],
};

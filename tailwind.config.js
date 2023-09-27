/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: " #100C08",
        secondary: "#fefefe",
        dimYellow: "#AD892F",
        dimWhite: "#FCFCFC",
        dimGrey: "#929292",
        dimRed: "#BE2127",
      },
      fontFamily: {
        'serif': ['ui-serif', 'Georgia'],
      }
    },
    screens: {
      'xs': "410px",
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
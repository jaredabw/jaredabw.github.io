/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: { // https://coolors.co/f4e8c1-a0c1b9-70a0af-706993-331e38
        'dutch_white': { DEFAULT: '#f4e8c1', 100: '#4b3c0d', 200: '#95781a', 300: '#dab22d', 400: '#e7cd78', 500: '#f4e8c1', 600: '#f6edce', 700: '#f9f2db', 800: '#fbf6e7', 900: '#fdfbf3' },
        'ash_gray': { DEFAULT: '#a0c1b9', 100: '#1c2b27', 200: '#38554e', 300: '#538075', 400: '#75a599', 500: '#a0c1b9', 600: '#b2cdc6', 700: '#c6dad5', 800: '#d9e6e3', 900: '#ecf3f1' },
        'moonstone': { DEFAULT: '#70a0af', 100: '#152125', 200: '#294249', 300: '#3e626e', 400: '#528392', 500: '#70a0af', 600: '#8cb3be', 700: '#a9c6cf', 800: '#c6d9df', 900: '#e2ecef' },
        'pomp_and_power': { DEFAULT: '#706993', 100: '#16151d', 200: '#2c293a', 300: '#423e58', 400: '#595375', 500: '#706993', 600: '#8b85a9', 700: '#a8a4be', 800: '#c5c2d4', 900: '#e2e1e9' },
        'dark_purple': { DEFAULT: '#331e38', 100: '#0a060b', 200: '#140c17', 300: '#1f1222', 400: '#29182d', 500: '#331e38', 600: '#653c6f', 700: '#975aa6', 800: '#ba91c4', 900: '#dcc8e1' }
      }
    },
  },
  plugins: [],
}


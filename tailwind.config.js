/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#F5F5F5',
      'grey': '#CECFC7',
      'black': '#000000',
      'red': '#ff0000'
    },
    extend: {},
  },
  plugins: [],
}
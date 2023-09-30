/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        "arabic": ['Scheherazade New', 'serif']
      }
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
}



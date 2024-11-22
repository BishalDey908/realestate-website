/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        zoom: 'zoomIn 2s ease-in-out',
        slideIn: "slideIn 0.5s ease-out",
      },
      keyframes: {
        zoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      }, 
      fontFamily: {
        sans: ['Roboto', 'Arial', 'sans-serif'], // Google font
      },
    }
  },
  plugins: [],
}
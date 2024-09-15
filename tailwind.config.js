/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter var", sans-serif',
        ]
      },
      colors: {
        primarycolor : "#37C38F",
        lightprimary: "#ECFBF5",
        darkprimary: "#7878784D",
        lightgreyshade: "#f5f5f5"
      }
    },
  },
  plugins: [],
}


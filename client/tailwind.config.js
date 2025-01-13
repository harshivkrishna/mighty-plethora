/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'custom-gold':'#ebb85e',
        'custom-grey':"#374151"
      },
      animation: {
        growBottom: "growBottom 2s ease-out forwards",
        growTop: "growTop 2s ease-out forwards",
      },
      keyframes: {
        growBottom: {
          "0%": { height: "0" },
          "100%": { height: "50%" },
        },
        growTop: {
          "0%": { height: "0" },
          "100%": { height: "50%" },
        },
      },
    },
  },
  plugins: [],
}


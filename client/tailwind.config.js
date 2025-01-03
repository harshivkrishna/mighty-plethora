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
      }
    },
  },
  plugins: [],
}


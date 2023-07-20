/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'main-color': "#1f123a",
      },
      backgroundImage: {
        'hero': "url('/public/assets/images/adastrahubBg.png')",
      },
      fontFamily: {
        NTR: ["NTR","sans-serif"],
        CourierPrime: ["Courier-Prime","sans"],
      }
    },
  },
  plugins: [
    
  ],
}
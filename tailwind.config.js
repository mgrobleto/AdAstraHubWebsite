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
      },
      animation: {
        text: 'text 5s ease infinite'
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': "200% 200%",
            'background-position': "left center"
          },
          '50%': {
            'background-size': "200% 200%",
            'background-position': "right center"
          }
        }
      }
    },
  },
  plugins: [
    
  ],
}
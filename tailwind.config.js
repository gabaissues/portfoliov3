/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    colors: {
      'purple': '#503D77',
      'gray': {
        100: '#F9F9F9',
        500: '#B1B1B1'
      }
    },
    fontFamily: {
      'poppins': ['Poppins'],
      'spacemono': ['Space Mono']
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {}
},
  plugins: [],
}

const { url } = require('inspector');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors:{
        primary: '#18A4E0',
        secondary: '#D3DDE6',
        dark: '#323039',
        light: '#FAF8F0'
      },
      backgroundImage:{
        'backgroundCover': url('/dist/img/marek-piwnicki-jFukTjphXbI-unsplash.jpg')
      },
      inset:{
        '17':'68px',
        '26':'104px'
      },
      
    },
  },
  plugins: [],
}


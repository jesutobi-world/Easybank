/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url(/images/bg-intro-mobile.svg)"
      },
      textColor:{
        'darkBlue' : 'hsl(233, 26%, 24%)',
        'grayishBlue' :'hsl(233, 8%, 62%)',
      },
      colors:{
        'limeGreen' : 'hsl(136, 65%, 51%)',
        'brightCyan' : 'hsl(192, 70%, 51%)',
        'lightGrayishBlue': 'hsl(220, 16%, 96%)',
        'veryLightGrayishBlue':'hsl(0, 0%, 98%)',
        'grayishBlue' :'hsl(233, 8%, 62%)',
        'darkBlue' : 'hsl(233, 26%, 24%)',
      },
      fontFamily:{
        'publicSans' : ["'Public Sans'", 'sans-serif']
      }
    },
  },
  plugins: [],
}


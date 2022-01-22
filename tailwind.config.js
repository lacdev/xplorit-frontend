const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily:{
      Poppins: ['Poppins','sans-serif']
    },
    extend: {
      colors:{
       primary:"#FAFAFA",
       secondary:"#4377FF",
       tertiary:"#B9FFF2",
       quartiary:"#3EA7E2",
       tagscolor:"#C0E2F6"
      },
      minHeight:{
        cardHeight:'200px',
        heroHeight:'50.875rem',
      },
      width:{
        cardWidth:'21rem',
      },
    },
  },
  plugins: [],
}

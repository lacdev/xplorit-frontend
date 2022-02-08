require('tailwindcss/colors')
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
       tagscolor:"#C0E2F6",
       bannertitles:"#575A89",
      },
      minHeight:{
        cardHeight:'200px',
        heroHeight:'50.875rem',
        
      },
      width:{
        cardWidth:'26rem',
        testimonialWidth:'19rem',
        
      },
      minWidth:{
        footerBannerW:'85.063rem',
        commentsW:'50rem',
      },
      height:{
        testimonialHeight:'24rem',
        footerBannerH:'20.5rem',
        commentsH:'18.75rem',
        sliderH:'100vh',
        
      },
      margin:{
        '15':'3.75rem',
        '27':'6.875rem',
        '29':'7.25rem',
      },
    
      fontSize:{
       'h1':'4rem',
      },
      dropShadow:{
        testimonialShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',
      },
      fontFamily: {
        primary: ['Poppins'],
      },
      backgroundImage: {
        'img-01': "url('assets/img/LogInPicture.png')",
        'waterfall': "url('assets/img/waterfall.jpg')",
        'footerBanner': "url('assets/img/img3.jpg')",
        'routeplaceimg':"url('assets/img/unplash1.jpg')",
      },
      inset:{
        '30rem':'30rem',
        '62.5rem':'62.5rem',
        'bottom7.5':'1.875rem',
      },
      transitionDelay:{
       '05ms':'0.5s',
      },
      keyframes:{
       slides:{
         '0':{transform:'opacity 0'},
         '100':{transform:'opacity 100'},
       }
      },
      screens:{
        'phone':'546px',
        // => @media (min-width: 546px) {...}
      },
    },
  },
  plugins: [
    
  ],
}

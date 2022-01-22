import React from 'react';
import img2 from 'assets/img/img2.jpg'

const classes={
    container:'w-full h-auto min-h-heroHeight bg-primary opacity-100',
    img:'object-cover h-1/5 min-w-full opacity-50 mix-blend-darken ',
}
function HeroBanner() {
  return (
  <section className={classes.container} >
     
         <img src={img2} className={classes.img} alt='hero-banner'/>
     
  </section>
  );
}

export default HeroBanner;

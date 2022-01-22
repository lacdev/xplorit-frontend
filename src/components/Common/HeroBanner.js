import React from 'react';
import img2 from 'assets/img/img2.jpg'

const classes={
    container:'w-full h-auto min-h-heroHeight bg-primary',
    img:'object-cover h-1/5 min-w-full brightness-50',
}
function HeroBanner() {
  return (
  <section className={classes.container} >
     
         <img src={img2} className={classes.img} alt='hero-banner'/>
     
  </section>
  );
}

export default HeroBanner;

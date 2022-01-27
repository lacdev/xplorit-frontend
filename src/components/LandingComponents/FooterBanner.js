import React from 'react';
import FooterImg from 'assets/img/img3.jpg'

const classes={
    container:'w-full h-80 flex justify-center',
    img:'object-cover min-w-footerBannerW h-footerBannerH min-h-fit rounded-3xl m-6'
} 
function FooterBanner() {
  return (
  <div className={classes.container} >
      <div>
      <img src={FooterImg} className={classes.img} alt='*'/>
      </div>
  </div>

    );
}

export default FooterBanner;

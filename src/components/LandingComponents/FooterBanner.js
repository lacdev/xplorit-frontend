import React from 'react';
import Btncards from 'components/Common/Btncards';

const classes={
    container:'w-full h-80 flex justify-center mb-20',
    infocon:'w-11/12 rounded-3xl h-full bg-footerBanner bg-no-repeat bg-center mt-4',
    sectioncon:'h-full justify-center bg-black/50 items-center rounded-3xl',
    text:'font-primary font-bold  text-white text-2xl md:text-4xl text-center py-20',
    btncon:'flex w-full justify-around',
    btn:'py-2',

    //img:'object-cover min-w-footerBannerW h-footerBannerH min-h-fit rounded-3xl m-6'
} 
function FooterBanner() {
  return (
  <div className={classes.container} >
      <div className={classes.infocon}>
      <section className={classes.sectioncon}>
        <p className={classes.text}>Encuentra más lugares de tu interés en Xplorit</p>
        <div className={classes.btncon}>
          <Btncards className={classes.btn} buttonText="Descubrir"/>
        </div>
      </section>
    </div>
  </div>

    );
}

export default FooterBanner;

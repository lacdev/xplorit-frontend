import React from 'react';
import Btncards from 'components/Common/Btncards';

const classes={
    container:'w-full h-80 flex justify-center',
    //img:'object-cover min-w-footerBannerW h-footerBannerH min-h-fit rounded-3xl m-6'
} 
function FooterBanner() {
  return (
  <div className={classes.container} >
      <div className='w-11/12 rounded-3xl h-full bg-footerBanner bg-no-repeat bg-center mt-4'>
      <section className=' h-full justify-center bg-black/50 items-center rounded-3xl'>
        <p className='font-primary font-bold  text-white text-2xl md:text-4xl text-center py-20'>Encuentra más lugares de tu interés en Xplorit</p>
        <div className='flex w-full justify-around'>
          <Btncards className='py-2' buttonText="Descubrir"/>
        </div>
      </section>
    </div>
  </div>

    );
}

export default FooterBanner;

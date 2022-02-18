import React from 'react';
import secondTrip from 'assets/img/secondTrip.png'

const classes ={
    bodycon:'align-middle w-full',
    sectioncon:'md:flex justify-center bg-gradient-to-b from-[#B9FFF2] py-10 items-center',
    title:'w-full md:w-1/4 m-auto text-3xl text-[#575A89] text-center font-bold ',
    img:'w-full md:w-1/2 m-auto',
}
function SecondBannerImage() {
  return <div className={classes.bodycon}>
      <section className={classes.sectioncon}>
        <h2 className={classes.title}>Haz recomendaciones, comparte tus experiencias con la comunidad</h2>
        <img className={classes.img} src={secondTrip} alt='banner-second'></img>
      </section>
  </div>;
}

export default SecondBannerImage;
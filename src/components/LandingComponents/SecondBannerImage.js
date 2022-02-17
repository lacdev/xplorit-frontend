import React from 'react';
import secondTrip from 'assets/img/secondTrip.png'

export default function SecondBannerImage() {
  return <div className='align-middle w-full'>
      <section className='md:flex justify-center bg-gradient-to-b from-[#B9FFF2] py-10 items-center'>
        <h2 className='w-full md:w-1/4 m-auto text-3xl text-[#575A89] text-center font-bold '>Haz recomendaciones, comparte tus experiencias con la comunidad</h2>
        <img className='w-full md:w-1/2 m-auto' src={secondTrip}></img>
      </section>
  </div>;
}

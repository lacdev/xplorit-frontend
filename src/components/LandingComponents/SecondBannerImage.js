import React from 'react';
import secondTrip from 'assets/img/secondTrip.png'

export default function SecondBannerImage() {
  return <div className='flex align-middle'>
      <section className='inline-flex justify-center bg-gradient-to-b from-[#B9FFF2] py-10 items-center'>
        <h2 className='w-1/4 text-3xl text-[#575A89] font-bold '>Haz recomendaciones, comparte tus experiencias con la comunidad</h2>
        <img className='w-1/2' src={secondTrip}></img>
      </section>
  </div>;
}

import React from 'react';
import travelingGirl from 'assets/img/travelingGirl.png'

export default function FirstBannerImage() {
  return <div className='align-middle w-full'>
      <section className='md:flex justify-center bg-gradient-to-b from-[#B9FFF2] py-10 items-center'>
        <h2 className='w-full md:w-1/4 m-auto text-3xl text-[#575A89] text-center font-bold '>Explora las mejores rutas compartidas por la comunidad</h2>
        <img className='w-full md:w-1/2 m-auto' src={travelingGirl}></img>
      </section>
  </div>;
}

import React from 'react';
import travelingGirl from 'assets/img/travelingGirl.png'

export default function FirstBannerImage() {
  return <div className='flex align-middle'>
      <section className='inline-flex justify-center bg-gradient-to-b from-[#B9FFF2] py-10 items-center'>
        <h2 className='w-1/4 text-3xl text-[#575A89] font-bold font-primary'>Explora las mejores rutas compartidas por la comunidad</h2>
        <img className='w-1/2' src={travelingGirl}></img>
      </section>
  </div>;
}

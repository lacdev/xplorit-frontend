import React from 'react';
import img2 from 'assets/img/img2.jpg'
import Inputs from './Inputs';
import Btncards from './Btncards';


// const classes={
//     container:'w-full h-auto min-h-heroHeight bg-primary',
//     img:'object-cover h-1/5 min-w-full brightness-50',
//     titlecontent:'relative '
// }
function HeroBanner() {
  return (
    <div className='w-full h-screen bg-waterfall bg-no-repeat bg-cover'>
    <section className='flex h-full justify-center items-center bg-black/50'>
      <div className='w-2/3 m-auto content-center'>
        <p className='font-primary font-bold  text-white text-4xl text-center m-10'>Explora lugares cercanos a ti</p>
        <p className='font-primary font-bold  text-white text-3xl text-center m-6'>Conoce la experiencia que otros usuarios han tenido</p>
        <Inputs placeholderText="Empieza tu búsqueda aquí"/>
        <div className='flex w-full justify-around'>
          <Btncards className='py-2' buttonText="Buscar"/>
        </div>
      </div>
    </section>
  </div>
  );
}

export default HeroBanner;

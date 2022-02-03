import React from 'react';
//import img2 from 'assets/img/img2.jpg'
import Inputs from './Inputs';
import Btncards from './Btncards';
import Titles from './Titles';

 const classes={
       container:'w-full h-screen max-h-[700px] bg-waterfall bg-no-repeat bg-cover',
       section:'flex h-full justify-center items-center bg-black/50',
       maincon:'w-2/3 m-auto content-center',
       titlescon:'text-center text-white py-4 mb-8',
       title1:'text-center m-10',
       title2:'text-center m-6 text-white',
       btncon:'flex w-full justify-around',
       btn:'py-2',
//    img:'object-cover h-1/5 min-w-full brightness-50',
//     titlecontent:'relative '
   }
function HeroBanner() {
  return (
    <div className={classes.container} >
      <section className={classes.section} >
        <div className={classes.maincon} >
          <div className={classes.titlescon} >
          <Titles tag='h1' titleText='Explora lugares cercanos a ti' className={classes.title1} />
          <Titles tag='h2' titleText='Conoce la experiencia que otros usuarios han tenido' className={classes.title2} />
          </div>
          <Inputs placeholderText="Empieza tu búsqueda aquí" />
          <div className={classes.btncon} >
            <Btncards className={classes.btn} buttonText="Buscar" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroBanner;

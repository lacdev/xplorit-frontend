import React from 'react';
import HeroBanner from "components/Common/HeroBanner"
import BigTitle from 'components/Common/BigTitle';
import FirstBannerImage from 'components/LandingComponents/FirstBannerImage';
import SecondBannerImage from 'components/LandingComponents/SecondBannerImage';
import FooterBanner from 'components/LandingComponents/FooterBanner';
import CardCarousel from 'components/CardCarousel';
import Btncards from 'components/Common/Btncards';
import TestimonialCarousel from 'components/TestimonialCarousel';


export default function Home() {
  return <div className='justify-center align-middle'> 
        <HeroBanner className="App-header"/>
        <BigTitle bigTitleText="Lugares mejor valorados"/>
        <div className='flex w-5/6 m-auto justify-center'>
          <CardCarousel/>
        </div >
        <div className='flex w-full justify-center'>
          <Btncards className='py-2 mt-8 mb-4' buttonText='Ver más'/>
        </div>
        <FirstBannerImage/>
        <BigTitle bigTitleText="Rutas más recorridas"/>
        <div className='flex w-5/6 m-auto justify-center'>
          <CardCarousel/>
        </div >
        <div className='flex w-full justify-center'>
          <Btncards className='py-2 mt-8 mb-4' buttonText='Ver más'/>
        </div>
        <SecondBannerImage/>
        <BigTitle bigTitleText="Lo que dicen de nosotros"/>
        <div className='flex w-2/3 justify-around m-auto'>
          <TestimonialCarousel/>
        </div>
        <FooterBanner/>
  </div>;
}

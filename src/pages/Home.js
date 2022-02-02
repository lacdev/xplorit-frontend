import React from 'react';
import HeroBanner from "components/Common/HeroBanner"
import Cards from "components/Common/Cards"
import BigTitle from 'components/Common/BigTitle';
import FirstBannerImage from 'components/LandingComponents/FirstBannerImage';
import SecondBannerImage from 'components/LandingComponents/SecondBannerImage';
import Testimonials from 'components/LandingComponents/Testimonials';
import FooterBanner from 'components/LandingComponents/FooterBanner';
import CardCarousel from 'components/CardCarousel';


export default function Home() {
  return <div className='justify-center align-middle'> 
        <HeroBanner className="App-header"/>
        <BigTitle bigTitleText="Lugares más visitados"/>
        <div className='flex w-5/6 m-auto justify-center'>
          <CardCarousel/>
        </div >
        <FirstBannerImage/>
        <BigTitle/>
        <div className='flex w-5/6 m-auto justify-center'>
          <CardCarousel/>
        </div >
        <SecondBannerImage/>
        <BigTitle bigTitleText="Lo que dicen de nosotros"/>
        <div className='flex w-2/3 justify-around m-auto'>
          <Testimonials/>
          <Testimonials/>
          <Testimonials/>
        </div>
        <FooterBanner/>
  </div>;
}

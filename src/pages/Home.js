import React from 'react';
import HeroBanner from "components/Common/HeroBanner"
import Cards from "components/Common/Cards"
import BigTitle from 'components/Common/BigTitle';
import FirstBannerImage from 'components/LandingComponents/FirstBannerImage';
import SecondBannerImage from 'components/LandingComponents/SecondBannerImage';
import Testimonials from 'components/LandingComponents/Testimonials';

import FooterBanner from 'components/LandingComponents/FooterBanner';

export default function Home() {
  return <div className='justify-center align-middle'> 
        <HeroBanner className="App-header"/>
        <BigTitle bigTitleText="Lugares más visitados"/>
        <Cards/>
        <FirstBannerImage/>
        <BigTitle/>
        <Cards/>
        <SecondBannerImage/>
        <BigTitle/>
        <Testimonials/>
        <FooterBanner/>
  </div>;
}

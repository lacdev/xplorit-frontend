import React from 'react';
import HeroBanner from "components/Common/HeroBanner"
import Cards from "components/Common/Cards"
import BigTitle from 'components/Common/BigTitle';
import FirstBannerImage from 'components/FirstBannerImage';
import SecondBannerImage from 'components/SecondBannerImage';

export default function Home() {
  return <div className='justify-center'> 
        <HeroBanner className="App-header"/>
        <BigTitle/>
        <Cards/>
        <FirstBannerImage/>
        <BigTitle/>
        <Cards/>
        <SecondBannerImage/>
        <BigTitle/>
  </div>;
}

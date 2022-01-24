import React from 'react';
import HeroBanner from "components/Common/HeroBanner"
import Cards from "components/Common/Cards"
import BigTitle from 'components/Common/BigTitle';
import FirstBannerImage from 'components/FirstBannerImage';
import SecondBannerImage from 'components/SecondBannerImage';
import Input from 'components/Common/Input'

export default function Home() {
  return <div className='justify-center align-middle'> 
        <HeroBanner className="App-header"/>
        <BigTitle/>
        <Input/>
        <Cards/>
        <FirstBannerImage/>
        <BigTitle/>
        <Cards/>
        <SecondBannerImage/>
        <BigTitle/>
  </div>;
}

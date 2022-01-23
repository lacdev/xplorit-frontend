import React from 'react';
import HeroBanner from "components/Common/HeroBanner"
import Cards from "components/Common/Cards"
import BigTitle from 'components/Common/BigTitle';

export default function Home() {
  return <div> 
        <HeroBanner className="App-header"/>
        <Cards/>
  </div>;
}

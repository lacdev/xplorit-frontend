import HeroBanner from 'components/Common/HeroBanner';
import Titles from 'components/Common/Titles';
import React from 'react';

const classes = {
  parentcon:'justify-center align-middle',
  titlecon:'flex break-words w-full justify-around p-4',
}
function PlacePage() {
  return (
  <div className={classes.parentcon} >
   <HeroBanner/>
    <div>
      <Titles tag='h1' titleText='Comienza a descubir rutas creadas por la comunidad'></Titles>
    </div>
    

  </div>
    
    );
}
export default  PlacePage;
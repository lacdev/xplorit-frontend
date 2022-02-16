import React from 'react';
import { useParams } from 'react-router-dom';

import HeroBanner from "components/Common/HeroBanner"
import BigTitle from 'components/Common/BigTitle';
import FirstBannerImage from 'components/LandingComponents/FirstBannerImage';
import SecondBannerImage from 'components/LandingComponents/SecondBannerImage';
import FooterBanner from 'components/LandingComponents/FooterBanner';
import CardCarousel from 'components/CardCarousel';
import Btncards from 'components/Common/Btncards';
import TestimonialCarousel from 'components/TestimonialCarousel';

import { useQuery } from 'react-query';
import { getCardsPlacesHome } from 'services/places.services'
import { getCardsRoutesHome } from 'services/routes.services'

export default function Home() {

  const useQueryMultiple = () => {
    //places
  const cardsForPlacesInHome = useQuery('getAllPlaces',getCardsPlacesHome) 

    //Routes
  const cardsForRoutesInHome = useQuery('getAllRoutes', getCardsRoutesHome)  
 
  return { cardsForPlacesInHome, cardsForRoutesInHome };
  };

  const {cardsForPlacesInHome, cardsForRoutesInHome} = useQueryMultiple()

  const { data:placesData, isLoading:loadingPlace, status } = cardsForPlacesInHome
  
  const { data:routesData, isLoading:loadingRoute, status: statusR } = cardsForRoutesInHome

  if(status === 'error') {
    return <span className='font-bold text-center'>No se encontraron lugares con ese ID</span>
  }

  if(statusR === 'error') {
    return <span className='font-bold text-center'>No se encontraron rutas con ese ID</span>
  }
  

  return <div className='justify-center align-middle'> 
        <HeroBanner className="App-header"/>
        <BigTitle bigTitleText="Lugares mejor valorados"/>
        <div className='flex w-5/6 m-auto justify-center'>
          {loadingPlace === true ? <span>Loading...</span> : <CardCarousel type={'place'} cardsData={placesData} />}
        </div >
        <div className='flex w-full justify-center'>
          <Btncards className='py-2 mt-8 mb-4' buttonText='Ver más'/>
        </div>
        <FirstBannerImage/>
        <BigTitle bigTitleText="Rutas más recorridas"/>
        <div className='flex w-5/6 m-auto justify-center'>
          {loadingRoute === true ? <span>Loading...</span> : <CardCarousel type={'route'} cardsData={routesData}/>}
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
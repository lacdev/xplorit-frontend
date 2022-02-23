import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
//Components
import HeroBanner from "components/Common/HeroBanner";
import BigTitle from "components/Common/BigTitle";
import FirstBannerImage from "components/LandingComponents/FirstBannerImage";
import SecondBannerImage from "components/LandingComponents/SecondBannerImage";
import FooterBanner from "components/LandingComponents/FooterBanner";
import CardCarousel from "components/CardCarousel";
import Btncards from "components/Common/Btncards";
import TestimonialCarousel from "components/TestimonialCarousel";
//Services
import { useQuery } from "react-query";
import { getCardsPlacesHome } from "services/places.services";
import { getCardsRoutesHome } from "services/routes.services";
import { AuthContext } from "context/AuthContext";
import LoaderHome from "components/LandingComponents/LoaderHome";

const classes = {
  parentcon: "justify-center align-middle",
  cardscon: "flex w-5/6 m-auto justify-center",
  btncon: "flex w-full justify-center",
  btnclass: "py-2 mt-8 mb-4",
  testiomonialcon: "flex w-2/3 justify-around m-auto",
};

function Home() {
  //Querys de Cards de Lugares y Rutas
  const { userState } = useContext(AuthContext);
  const useQueryMultiple = () => {
    //places
    const cardsForPlacesInHome = useQuery("getAllPlaces", getCardsPlacesHome);
    //Routes
    const cardsForRoutesInHome = useQuery("getAllRoutes", getCardsRoutesHome);
    return { cardsForPlacesInHome, cardsForRoutesInHome };
  };

  const { cardsForPlacesInHome, cardsForRoutesInHome } = useQueryMultiple();

  const {
    data: placesData,
    isLoading: loadingPlace,
    status,
  } = cardsForPlacesInHome;

  const {
    data: routesData,
    isLoading: loadingRoute,
    status: statusR,
  } = cardsForRoutesInHome;

  if (status === "error") {
    return (
      <span className='font-bold text-center'>
        No se encontraron lugares con ese ID
      </span>
    );
  }

  if (statusR === "error") {
    return (
      <span className='font-bold text-center'>
        No se encontraron rutas con ese ID
      </span>
    );
  }

  return (
    <div className={classes.parentcon}>
      <HeroBanner className='App-header' />
      <BigTitle bigTitleText='Lugares mejor valorados' />
      <div className={classes.cardscon}>
        {loadingPlace === true ? (
          <LoaderHome/>
        ) : (
          <CardCarousel type={"place"} cardsData={placesData} />
        )}
      </div>
      <div className={classes.btncon}>
        <Link to='places'>
          <Btncards className={classes.btnclass} buttonText='Ver más' />
        </Link>
      </div>
      <FirstBannerImage />
      <BigTitle bigTitleText='Rutas más recorridas' />
      <div className={classes.cardscon}>
        {loadingRoute === true ? (
          <LoaderHome/>
        ) : (
          <CardCarousel type={"route"} cardsData={routesData} />
        )}
      </div>
      <div className={classes.btncon}>
        <Link to='routes'>
          <Btncards className={classes.btnclass} buttonText='Ver más' />
        </Link>
      </div>
      <SecondBannerImage />
      <BigTitle bigTitleText='Lo que dicen de nosotros' />
      <div className={classes.testiomonialcon}>
        <TestimonialCarousel />
      </div>
      <FooterBanner />
    </div>
  );
}
export default Home;

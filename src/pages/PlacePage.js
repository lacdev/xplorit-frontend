import Titles from "components/Common/Titles";
import React from "react";
import Inputs from "components/Common/Inputs";
import Btncards from "components/Common/Btncards";
import CardCarousel from "components/CardCarousel";
//useQuery & Services
import { useQuery } from "react-query";
import { getCardsPlacesHome } from "services/places.services";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
//import { getTopPlaces } from 'services/places.services';
//import { getNearPlaces } from 'services/places.services';
//import { getRecentlySharedPlaces } from 'services/places.services';

const classes = {
  parentcon: " font-primary justify-center align-middle",
  container: "w-full h-screen max-h-[700px] bg-routeplaceimg bg-no-repeat bg-cover",
  section: "flex h-full justify-center items-center bg-black/50",
  titlecon: "flex break-words w-full justify-around p-4",
  maincon: "w-5/6 justify-center inline-align-top text-center",
  titlescon: "mb-10",
  btn: "py-1",
  selectcon: "flex justify-end",
  textcon: "self-center",
  box: "mx-3 my-3",
  select:
    "block p-2.5 text-base text-gray-400 bg-neutral-200 bg-clip-padding bg-no-repeat border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:border-black focus:outline-none",
  carruselcon: "flex w-5/6 m-auto justify-center mb-20",
  textcarru: "ml-20 my-8",
};
function PlacePage() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");

  const useQueryMultiple = () => {
    //Top Places
    const cardsTopPlaces = useQuery("getTopPlaces", getCardsPlacesHome, {
      onSuccess: () => console.log("topPlaces fetch with success"),
    });

    //Near Places
    const cardsNearPlaces = useQuery("getNearPlaces", getCardsPlacesHome, {
      onSuccess: () => console.log("nearPlaces fetch with success"),
    });

    //Recently shared Places
    const cardsRecentlySharedPlaces = useQuery("getRecentlySharedPlaces", getCardsPlacesHome, {
      onSuccess: () => console.log("getRecentlySharedPlaces fetch with success"),
    });

    return { cardsTopPlaces, cardsNearPlaces, cardsRecentlySharedPlaces };
  };

  const { cardsTopPlaces, cardsNearPlaces, cardsRecentlySharedPlaces } = useQueryMultiple();

  const { data: topPlacesData, isLoading: loadingTopPlaces, status } = cardsTopPlaces;
  const { data: nearPlacesData, isLoading: loadingNearPlaces, status: statusP } = cardsNearPlaces;
  const { data: recentlyPlacesData, isLoading: loadingRecentlyPlaces, status: statusR } = cardsRecentlySharedPlaces;

  const onFormSubmit = (event) => {
    event.preventDefault();
    navigate({
      pathname: "/searchPlace",
      search: `?query= ${inputText}`,
    });
    //navigate('/searchPlace', {search: `?query= ${inputText}`})
  };

  if (status === "error") {
    <span className="font-bold text-center"> no se encontraron lugares </span>;
  }

  if (statusP === "error") {
    <span className="font-bold text-center"> no se encontraron lugares </span>;
  }

  if (statusR === "error") {
    <span className="font-bold text-center"> no se encontraron lugares </span>;
  }

  return (
    <div className={classes.parentcon}>
      <div className={classes.container}>
        <section className={classes.section}>
          <div className={classes.maincon}>
            <div className={classes.titlescon}>
              <Titles tag="h1" titleText="Comienza a descubir lugares creados por la comunidad" />
            </div>
            <Inputs
              value={inputText}
              placeholderText="Escribe el nombre o palabra clave"
              onChange={(event) => {
                setInputText(event.target.value);
              }}
            />
            <Btncards onClick={onFormSubmit} className={classes.btn} buttonText="Buscar" />
          </div>
        </section>
      </div>
      {/* <div className={classes.selectcon}>
        <div className={classes.textcon}>
          <p>Ordenar por:</p>
        </div>
        <div className={classes.box} >
        <select className={classes.select} >
          <option selected>Selecciona una opción</option>
          <option value='1'>Reciente</option>
          <option value='2'>Alfabéticamente</option>
          <option value='3'>Popular</option>
        </select>
        </div>
      </div> */}
      <div className={classes.textcarru}>
        <Titles tag="h4" titleText="Top de lugares populares" />
      </div>
      <div className={classes.carruselcon}>
        {loadingTopPlaces === true ? (
          <span>Loading...</span>
        ) : (
          <CardCarousel type={"place"} cardsData={topPlacesData} />
        )}
      </div>
      <div className={classes.textcarru}>
        <Titles tag="h4" titleText="Lugares cerca de ti" />
      </div>
      <div className={classes.carruselcon}>
        {loadingNearPlaces === true ? (
          <span>Loading...</span>
        ) : (
          <CardCarousel type={"place"} cardsData={nearPlacesData} />
        )}
      </div>
      <div className={classes.textcarru}>
        <Titles tag="h4" titleText="Lugares compartidos recientemente" />
      </div>
      <div className={classes.carruselcon}>
        {loadingRecentlyPlaces === true ? (
          <span>Loading...</span>
        ) : (
          <CardCarousel type={"place"} cardsData={recentlyPlacesData} />
        )}
      </div>
    </div>
  );
}
export default PlacePage;

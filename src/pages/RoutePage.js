import { useState } from "react";
import { useNavigate } from "react-router-dom";
//Querys & services
import { useQuery } from "react-query";
import { getCardsRoutesHome } from "services/routes.services";
import { getTopRoutes } from "services/routes.services";
import { getSharedRoutes } from "services/routes.services";

//Components
import Titles from "components/Common/Titles";
import React from "react";
import Inputs from "components/Common/Inputs";
import Btncards from "components/Common/Btncards";
import CardCarousel from "components/CardCarousel";
import LoadersCards from "components/Common/LoadersCards";

const classes = {
  parentcon: "font-primary justify-center",
  container:
    "w-full h-screen max-h-[700px] bg-routeplaceimg bg-no-repeat bg-cover",
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

function RoutePage() {
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");

  const useQueryMultiple = () => {
    //Top Routes
    const cardsTopRoutes = useQuery("getTopRoutes", getTopRoutes, {});

    //Near Routes
    const cardsNearRoutes = useQuery("getNearRoutes", getCardsRoutesHome, {});

    //Shared Routes
    const cardsSharedRoutes = useQuery("getSharedRoutes", getSharedRoutes, {});

    return { cardsTopRoutes, cardsNearRoutes, cardsSharedRoutes };
  };

  const { cardsTopRoutes, cardsNearRoutes, cardsSharedRoutes } =
    useQueryMultiple();

  const { data: dataTopRoutes, isLoading: loadingTopRoutes } = cardsTopRoutes;
  const { data: dataNearRoutes, isLoading: loadingNearRoutes } =
    cardsNearRoutes;
  const { data: dataSharedRoutes, isLoading: loadingSharedRoutes } =
    cardsSharedRoutes;

  const onFormSubmit = (event) => {
    event.preventDefault();
    navigate({
      pathname: "/searchroute",
      search: `?query= ${inputText}`,
    });
    //navigate('/searchPlace', {search: `?query= ${inputText}`})
  };

  return (
    <div className={classes.parentcon}>
      <div className={classes.container}>
        <section className={classes.section}>
          <div className={classes.maincon}>
            <div className={classes.titlescon}>
              <Titles
                tag='h1'
                titleText='Comienza a descubir rutas creadas por la comunidad'
              />
            </div>
            <Inputs
              value={inputText}
              placeholderText='Escribe el nombre o palabra clave'
              onChange={(event) => {
                setInputText(event.target.value);
              }}
            />
            <Btncards
              onClick={onFormSubmit}
              className={classes.btn}
              buttonText='Buscar'
            />
          </div>
        </section>
      </div>
      {/* <div className={classes.selectcon}>
        <div className={classes.textcon}>
          <p>Ordenar por:</p>
        </div>
        <div className={classes.box}>
          <select className={classes.select}>
            <option selected>Selecciona una opción</option>
            <option value="1">Reciente</option>
            <option value="2">Alfabeticamente</option>
            <option value="3">Popular</option>
          </select>
        </div>
      </div> */}
      <div className={classes.textcarru}>
        <Titles tag='h4' titleText='Top de rutas populares' />
      </div>
      <div className={classes.carruselcon}>
        {loadingTopRoutes === true ? (
          <LoadersCards />
        ) : (
          <CardCarousel type={"route"} cardsData={dataTopRoutes} />
        )}
      </div>
      {/* <div className={classes.textcarru}>
        <Titles tag="h4" titleText="Rutas cerca de ti" />
      </div>
      <div className={classes.carruselcon}>
        {loadingNearRoutes === true ? (
          <LoadersCards/>
        ) : (
          <CardCarousel type={"route"} cardsData={dataNearRoutes} />
        )}
      </div> */}
      <div className={classes.textcarru}>
        <Titles tag='h4' titleText='Rutas compartidas recientemente' />
      </div>
      <div className={classes.carruselcon}>
        {loadingSharedRoutes === true ? (
          <LoadersCards />
        ) : (
          <CardCarousel type={"route"} cardsData={dataSharedRoutes} />
        )}
      </div>
    </div>
  );
}

export default RoutePage;

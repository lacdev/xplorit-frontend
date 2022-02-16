import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "react-query";
import { getCardsPlacesHome } from "services/places.services";
import { getAllStates } from "services/utils.services";
//Components
import Btncards from "components/Common/Btncards";

//Imgages & Icons
import ModalFiltro from "components/ModalFiltro";

import MapComponent from "components/MapComponent";
import Toggle from "components/Toggle";
import SearchCards from "components/SearchCards";
import StateSelector from "components/StateSelector";

const classes = {
  sectionres: "font-primary w-full h-full min-h-screen",
  tagsfiltroscon: "flex flex-row justify-between p-1 w-full bg-white my-2",
  scroll: "scroll-smooth scroll-pl-4 snap-end snap-x snap-mandatory",
  scrolltags: "snap-center snap-always scroll-mr-3.5",
  btnclass: "py-2 flex flex-row-reverse content-center",
  renderres:
    "grid grid-cols-1 minTablet:grid-cols-5 grid-flow-col h-full min-h-screen",
  asidecon:
    "col-span-5 xl:col-span-3 minTablet:col-span-2 bg-white divide-y divide-solid border-slate-500 px-3",
  rescon: "py-2 pl-2",
  mapcon: "minTablet:block col-span-3 bg-gray-200 h-full",
};
function PlaceSearch() {
  const [showMap, setShowMap] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedMunicipio, setSelectedMunicipio] = useState(null);
  const isPhone = useMediaQuery({ query: "(max-width: 960px)" });
  const { data: statesData, status: statesStatus } = useQuery( "getAllStates", getAllStates );

  const useQueryPlaces = () => {
    //places
    const cardsForPlacesInHome = useQuery("getAllPlaces", getCardsPlacesHome);
    return { cardsForPlacesInHome };
  };
  const { cardsForPlacesInHome } = useQueryPlaces();

  const {
    data: placesData,
    isLoading: loadingPlace,
    status,
  } = cardsForPlacesInHome;

  if (status === "error") {
    return (
      <span className="font-bold text-center">
        No se encontraron lugares con ese ID
      </span>
    );
  }
  const HandlerClick = () => {
    setShowMap(!showMap);
    
  };
  let buttonText = "Mostrar Mapa";
  let mapContainerClass = classes.mapcon;

  if (!showMap) mapContainerClass += " hidden";
  else buttonText = "Ocultar Mapa";

  const renderSideBar = !isPhone || !showMap ? true : false;

  const onStateChange = (stateItem) => {
    setSelectedState(stateItem);
    setSelectedMunicipio(null);
  };

  const onMunicipioChange = (municipioItem) => {
    setSelectedMunicipio(municipioItem);
  };

  return (
    <div className="pt-16">
      <section className={classes.sectionres}>
        <div className={classes.tagsfiltroscon}>
          <div className="flex content-center items-center px-4">
            <span>Lugares</span>
            <Toggle />
            <span>Rutas</span>
          </div>
          <div className="hidden lg:flex overflow-x-hidden items-center pb-2">
            <Btncards
              buttonText="Aire Libre"
              padding="px-4"
              color="bg-quartiary"
              className={`mr-4 text-base min-w-110px ${classes.btnclass} `}
            ></Btncards>
            <Btncards
              buttonText="Artesanias"
              padding="px-4"
              color="bg-quartiary"
              className={`mr-4 text-base ${classes.btnclass} `}
            ></Btncards>
            <Btncards
              buttonText="Comida"
              padding="px-4"
              color="bg-quartiary"
              className={`mr-4 text-base ${classes.btnclass} `}
            ></Btncards>
            <Btncards
              buttonText="Cultural"
              padding="px-4"
              color="bg-quartiary"
              className={`mr-4 text-base ${classes.btnclass} `}
            ></Btncards>
            <Btncards
              buttonText="Entretenimiento"
              padding="px-4"
              color="bg-quartiary"
              className={`mr-4 text-base ${classes.btnclass} `}
            ></Btncards>
            <Btncards
              buttonText="Familiar"
              padding="px-4"
              color="bg-quartiary"
              className={`mr-4 text-base ${classes.btnclass} `}
            ></Btncards>
            <Btncards
              buttonText="Playa"
              padding="px-4"
              color="bg-quartiary"
              className={`mr-4 text-base ${classes.btnclass} `}
            ></Btncards>
          </div>
          <div className="ml-auto">
            <ModalFiltro />
          </div>
        </div>
        <section className={classes.renderres}>
          {renderSideBar && (
            <aside className={classes.asidecon}>
              <div className="flex flex-row w-full">
                <StateSelector
                  locationsData={statesData}
                  onStateChange={onStateChange}
                  selectOption={selectedState}
                />
                <StateSelector
                  locationsData={selectedState?.municipios || []}
                  renderMunicipios={true}
                  selectOption={selectedMunicipio}
                  onStateChange={onMunicipioChange}
                />
              </div>

              <div className={classes.rescon}>Resultados de busqueda</div>
              {loadingPlace === true ? (
                <span>Loading...</span>
              ) : (
                placesData.map((data) => {
                  return (
                    <SearchCards
                      id={data._id}
                      //typeofplace={data.type}
                      key={data._id}
                      name={data.name}
                      address={data.address.street}
                      labels={data.tags}
                      score={data.average}
                      ownerId={data.ownerId}
                      images={data?.images}
                    />
                  );
                })
              )}
              <Btncards buttonText="Mostrar más" color="bg-black"></Btncards>
            </aside>
          )}
          <div className={mapContainerClass}>
            <MapComponent fullHeight={true} />
          </div>
        </section>

        <Btncards
          buttonText={buttonText}
          className="py-1 block minTablet:hidden"
          onClick={HandlerClick}
        ></Btncards>
      </section>
    </div>
  );
}

export default PlaceSearch;

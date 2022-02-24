import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useQuery } from "react-query";
import Geocode from "react-geocode";
import { endpoints } from "endpoints/endpoints";
//Services
import { getAllFilterPlaces } from "services/places.services";
import { getAllStates } from "services/utils.services";
//Components
import Btncards from "components/Common/Btncards";
import ModalFiltro from "components/SeachComponents/ModalFiltro";
import MapComponent from "components/MapComponent";
//import Toggle from "components/SeachComponents/Toggle";
import SearchPlacesCards from "components/SeachComponents/SearchPlacesCards";
import StateSelector from "components/SeachComponents/StateSelector";
import BtnTags from "components/SeachComponents/BtnTags";
import LimitCards from "components/SeachComponents/LimitCards";
//import Inputs from 'components/Common/Inputs';
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const classes = {
  parentcon: "pt-16",
  sectionres: "font-primary w-full h-full min-h-screen overflow-hidden",
  tagsfiltroscon: "flex flex-row justify-between p-1 w-full bg-white my-2 mt-16",
  scroll: "scroll-smooth scroll-pl-4 snap-end snap-x snap-mandatory",
  scrolltags: "snap-center snap-always scroll-mr-3.5",
  togglecon: "flex content-center items-center px-4",
  btnclass: "py-2 flex flex-row-reverse content-center",
  btntagscon: "hidden minTablet:flex overflow-x-hidden items-center pb-2 ml-auto",
  renderres: "grid grid-cols-1 minTablet:grid-cols-5 grid-flow-col overflow-hidden h-[90vh]",
  togglespanplace: "mr-2",
  togglespanroute: "mx-2",
  filtroposition: "ml-auto my-auto",
  asidecon:
    "col-span-5 xl:col-span-3 minTablet:col-span-2 bg-white divide-y divide-solid border-slate-500 px-3 max-h-[90vh]",
  rescon: "py-2 pl-2",
  selectorcon: "flex flex-row w-full",
  divselector: "flex flex-col w-full",
  labelselect: "text-xs",
  cardscon: "h-asideSearch overflow-x-hidden divide-y divide-solid border-slate-500",
  mapcon: "minTablet:block col-span-3 bg-gray-200 h-full",
  btnshow: "py-1 block minTablet:hidden",
};
function PlaceSearch() {
  const [showMap, setShowMap] = useState(false);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedMunicipio, setSelectedMunicipio] = useState(null);
  const [locationsData, setLocationsData] = useState([]);  
  const [useRange, setUseRange] = useState(5);
  const [useSort, setUseSort] = useState ([]);
  const isPhone = useMediaQuery({ query: "(max-width: 960px)" });
  const { data: statesData, status: statesStatus } = useQuery( "getAllStates", getAllStates );
 const searchParam = decodeURIComponent(window.location.search);
  const queryFromURL = searchParam?.split('=')[1].replace(' ','');
 const [page, setPage ] = useState(1);
 const [places, setPlaces] = useState([]);
 const limit = '&limit=4';
 const [URLSearch, setURLSearch] = useState(`${endpoints.getFilterPlace}q=${queryFromURL}`);//localhost/...places?
 console.log("🚀 ~ file: PlaceSearch.js ~ line 57 ~ PlaceSearch ~ URLSearch", URLSearch)
 let customDragCenter = null; 
 const handlerNewPlaces = (placesrender) => {
  let newPlaces = {...places} 
  if(Object.keys(newPlaces).length === 0 ){
    setPlaces(placesrender)
  }
  else {
    console.log("🚀 ~ file: PlaceSearch.js ~ line 62 ~ handlerNewPlaces ~ newPlaces", newPlaces)
    console.log('What is placesrender?', placesrender)
    console.log("🚀 ~ file: PlaceSearch.js ~ line 64 ~ handlerNewPlaces ~ newPlaces", newPlaces.places)
    newPlaces.places.push(...placesrender.places)
    console.log("🚀 ~ file: PlaceSearch.js ~ line 65 ~ handlerNewPlaces ~ newPlaces", newPlaces)
    setPlaces(newPlaces)

  }
 }

  //Querys & service to Places
  //places
  const {
    data: placesData,
    isLoading: loadingPlace,
    status
  } = useQuery(["getAllFilterPlaces", URLSearch, page, limit], () => getAllFilterPlaces(URLSearch, page, limit), {
    onSuccess: (data) => handlerNewPlaces(data.data)
  } );

 if(status === "success") {
   console.log('is success?')
  //  setPlaces(placesData.data)
  //  console.log('what is places', places)
 }

  useEffect(() => {
    // if (status === "loading") {
    //   return;
    // }

    if (placesData === undefined) {
      return;
    }
    const markerCoords = places.places.map((correctCoords) => {
      return {
        coords: {
          lat: correctCoords.location?.coordinates[1],
          lng: correctCoords.location?.coordinates[0],
        },
      };
    });
    // console.log('is there URL?', URLSearch)
    setLocationsData(markerCoords);
  }, [ places]);

  if (status === "loading"){
    return <p>Cargando...</p>
  }

  // if (status === "error") {
  //   return (
  //     <span className="font-bold text-center">
  //       No se encontraron lugares con ese ID
  //     </span>
  //   );
  // }
  if (status === "success") {
     console.log('What is PLacesData?', placesData.data)
   }

  //Event Hide Aside Map
  const handlerClick = () => {
    setShowMap(!showMap);
  };
  let buttonText = "Mostrar Mapa";
  let mapContainerClass = classes.mapcon;

  if (!showMap) mapContainerClass += " hidden";
  else buttonText = "Ocultar Mapa";

  const renderSideBar = !isPhone || !showMap ? true : false;

  //Selectors State & City
  const onStateChange = (stateItem) => {
    setSelectedState(stateItem);
    setSelectedMunicipio(null);
  };
  const onMunicipioChange = (municipioItem) => {
    const newURL = endpoints.getFilterPlace + "q=" + municipioItem.value;
    // console.log("🚀 ~ file: PlaceSearch.js ~ line 96 ~ onMunicipioChange ~ newURL", newURL)
    setURLSearch(newURL);
    setSelectedMunicipio(municipioItem);
  };
//Toggle 
  // const onToggleChange = (event) => {
   // console.log('Acciona el evento onChange');
  // }
//Selector Sort on Modal
  const onSortChange = (event) => {
    setUseSort(event.target.value);
  };

//Input Range on Modal
 const onRangeChange = (event) => {
   setUseRange(event.target.value);
  }
// Pagination on LIMITS 
const handlePage = () => {
  const newPage = page + 1; 
  console.log('Estoy en el handle?', page)
  setPage(newPage)
}

//Buttons Tags on Modal & Desktop
  const onTagChange = (info) => {
    let newURL = "";
    console.log("Infomación de Tags", info);
    if (URLSearch.includes("q=")) {
      if (URLSearch.includes("tags")) {
        newURL = URLSearch + "," + info;
      } else {
        newURL = URLSearch + "&tags=" + info;
      }

      console.log("includes URLSearch");
    } else {
      if (URLSearch.includes("tags")) {
        newURL = URLSearch + "," + info;
      } else {
        newURL = URLSearch + "&tags=" + info;
      }
    }
    setURLSearch(newURL);
    console.log("how is the new URL", newURL);
  };

// Map Filter Distance, Lng & Lat
  const updatePlaceSearchLocation = (coords) => {
     let newURL = '';
     customDragCenter= coords;
     const distanceOnMiles = (useRange*1000)/1.6
     const filtersObject = {
       q:URLSearch.split('?')[1].split('&')[0],
       distance: `&distance=${distanceOnMiles}`,
       lng:`&lng=${coords.lng}`,
       lat:`&lat=${coords.lat}`
     }
     newURL = `${process.env.REACT_APP_SERVER_URL}/v1/places?${filtersObject.q}${filtersObject.distance}${filtersObject.lng}${filtersObject.lat}`
     console.log("🚀 ~ file: PlaceSearch.js ~ line 181 ~ updatePlaceSearchLocation ~ newURL", newURL);
    //  `${URLSearch}?lng=${coords.lng}&lat=${coords.lat} `; 
     console.log('What is URLSearch?', URLSearch);
     setURLSearch(newURL)
  }
 
  const MapCenter = locationsData.length > 0 ?
   locationsData[Math.floor(locationsData?.length / 2)]?.coords
  : customDragCenter; 
  if(status === "success") 
 { return (
    <div>
      <section className={classes.sectionres}>
        <div className={classes.tagsfiltroscon}>
          {/*  <div className={classes.togglecon}>
           <span className={classes.togglespanplace}>Lugares</span>
             <Toggle accionToggle={onToggleChange} /> 
            <span className={classes.togglespanroute}>Rutas</span> 
          </div>*/}
          <div className={classes.btntagscon}>
            <BtnTags className="min-w-fit" onTagClick={onTagChange} />
          </div>
          <div className={classes.filtroposition}>
            <ModalFiltro onSearch={URLSearch} onStateURL={setURLSearch}
             onChange={onSortChange} onRangeChange={onRangeChange} minValue={5} maxValue={50} value={useRange}
            />
          </div>
        </div>
        <section className={classes.renderres}>
          {renderSideBar && (
            <aside className={classes.asidecon}>
              {/* <div>
                <Inputs type='text' value={q} placeholderText="¿Que deseas explorar?" onChange={handlerKeyword}/>
            </div> */}

              <div className={classes.selectorcon}>
                <div className={classes.divselector}>
                  <label className={classes.labelselect}>Elige un Estado</label>
                  <StateSelector
                    locationsData={statesData}
                    onStateChange={onStateChange}
                    selectOption={selectedState}
                  />
                </div>
                <div className={classes.divselector}>
                  <label className={classes.labelselect}>Elige un Municipio</label>
                  <StateSelector
                    locationsData={selectedState?.municipios || []}
                    renderMunicipios={true}
                    selectOption={selectedMunicipio}
                    onStateChange={onMunicipioChange}
                  />
                </div>
              </div>

              <div className={classes.rescon}>Resultados de busqueda</div>
              {loadingPlace === true && <span>Loading...</span>}
              {status === "error" && <span className="font-bold text-center">No se encontraron lugares</span>}
              {loadingPlace === false && status === "success" && (
                <div className={classes.cardscon}>
                  {status === "success" && placesData.data && 
                    places.places.map((data, index) => {
                      return (
                        <SearchPlacesCards
                          id={data._id}
                          type={'place'}
                          key={index}
                          name={data.name}
                          address={data.address.street}
                          labels={data.tags}
                          score={data.average}
                          ownerId={data.ownerId}
                          images={data?.images}
                        />
                      );
                    })}
                </div>
              )}
             {
               places.places.hasNextPage && 
               <LimitCards onClick={handlePage}/>
             } 
            </aside>
          )}
          <div className={mapContainerClass}>
            <MapComponent
              fullHeight={true}
              locationsData={locationsData}
              useMultipleLocations={false}
              useCircle={true}
              radius={useRange}
              updatePlaceSearchLocation={updatePlaceSearchLocation}
              //  customCenter={MapCenter}
            />
          </div>
        </section>

        <Btncards buttonText={buttonText} className={classes.btnshow} onClick={handlerClick}></Btncards>
      </section>
    </div>
  );}
}

export default PlaceSearch;

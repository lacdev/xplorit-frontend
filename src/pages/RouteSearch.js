import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
//Components
import Btncards from 'components/Common/Btncards';
import Titles from 'components/Common/Titles';
import { Labels } from 'components/Common/Labels';
//Imgages & Icons
import { AdjustmentsIcon } from '@heroicons/react/outline';
import Image from "assets/img/image.jpg";
import HeartFillOut from 'assets/icons/HeartFillOut';
import StarComplete from 'assets/icons/StarComplete';
import MapComponent from 'components/MapComponent';

const classes={
   sectionres:'font-primary w-full h-full min-h-screen',
   tagsfiltroscon:'flex flex-row p-1 w-full bg-white justify-end my-2',
   btnclass:'py-2 flex flex-row-reverse content-center',
   filtroicon:'mr-2',
   renderres:'grid grid-cols-1 minTablet:grid-cols-5 grid-flow-col h-full min-h-screen',
   asidecon:'col-span-5 xl:col-span-3 minTablet:col-span-2 bg-white divide-y divide-solid border-slate-500 px-3',
   rescon:'py-2 pl-2',
   articlecon:'py-2 px-4',
   infocon:'flex',
   img:'h-32 w-44 object-cover object-center rounded-md',
   detailscon:'flex flex-col pl-2',
   labelscon:'flex flex-wrap my-2',
   ubitextcon:'py-3',
   ubitext:'text-xs break-words',
   btn:'py-1',
   hearticon:'m-0',
   starticon:'mt-5 mr-0',
   starttext:'text-xs text-center',
   placestext:'mt-3 text-xxs underline decoration-solid decoration-black text-center',
   mapcon:'minTablet:block col-span-3 bg-gray-200 h-full',

  
}

function RouteSearch() {
  const [showMap, setShowMap] = useState(false);
  const isPhone = useMediaQuery({query:'(max-width: 960px)'});
 
  const HandlerClick = () => {
    
    setShowMap(!showMap)
    console.log(showMap)
  }
  let buttonText = 'Mostrar Mapa' 
  let mapContainerClass = classes.mapcon
  
  if (!showMap) 
   mapContainerClass += ' hidden'
  else 
   buttonText = 'Ocultar Mapa';
  
   const renderSideBar = (!isPhone || !showMap ) ? true : false
  
 

  return (
   
      <>
        <section className={classes.sectionres}>
          <div className={classes.tagsfiltroscon}>
            <Btncards
              className={classes.btnclass}
              buttonText="Filtros"
            >
              <AdjustmentsIcon width="20px" height="20px" className={classes.filtroicon} />
            </Btncards>
          </div>
          <section className={classes.renderres}>
           {renderSideBar && <aside className={classes.asidecon}>
              <div className={classes.rescon} >Resultados de busqueda</div>
              <article className={classes.articlecon}>
                <div className={classes.infocon}>
                  <img
                    src={Image}
                    alt="search-img"
                    className={classes.img}
                  />
                  <div className={classes.detailscon}>
                    <Titles tag="h6" titleText="Nombre del Lugar"></Titles>
                    <div className={classes.labelscon}>
                      <Labels LabelText="Aventura"></Labels>
                      <Labels LabelText="Playa"></Labels>
                      <Labels LabelText="Relajación"></Labels>
                      <Labels LabelText="Nocturno"></Labels>
                    </div>
                   
                    <div>
                      <Btncards buttonText="Explorar" className={classes.btn} ></Btncards>
                    </div>
                  </div>
                  <div>
                    <HeartFillOut width="30px" height="30px" className={classes.hearticon} />
                    <StarComplete width="30px" height="30px" className={classes.starticon} />
                    <p className={classes.starttext}>5</p>
                   
                      <p className={classes.placestext}>9 lugares</p>
                      
                  </div>
                </div>
              </article>
              <article className={classes.articlecon}>
                <div className={classes.infocon}>
                  <img
                    src={Image}
                    alt="search-img"
                    className={classes.img}
                  />
                  <div className={classes.detailscon}>
                    <Titles tag="h6" titleText="Nombre del Lugar"></Titles>
                    <div className={classes.labelscon}>
                      <Labels LabelText="Aventura"></Labels>
                      <Labels LabelText="Playa"></Labels>
                      <Labels LabelText="Relajación"></Labels>
                      <Labels LabelText="Nocturno"></Labels>
                    </div>
                    <div>
                      <Btncards buttonText="Explorar" className={classes.btn}></Btncards>
                    </div>
                  </div>
                  <div>
                    <HeartFillOut width="30px" height="30px" />
                    <StarComplete width="30px" height="30px" className={classes.starticon} />
                    <p className={classes.starttext}>5</p>
                    <p className={classes.placestext}>5 lugares</p>
                  </div>
                </div>
              </article>
            </aside>}
            <div className={mapContainerClass}>
              <MapComponent fullHeight={true} />
            </div>
          </section>
          <Btncards buttonText={buttonText} className="py-1 block minTablet:hidden" onClick={HandlerClick}></Btncards>
        </section>
      </>
  
  );
}
export default RouteSearch;
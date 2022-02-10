import React from 'react';
//Icons & Images
import HeartFillOut from "assets/icons/HeartFillOut";
import StarComplete from "assets/icons/starComplete";
import ThreePoints from "assets/icons/ThreePoints";
import Map from "assets/img/mapsample.png";
import PinMap from "assets/icons/PinMap";

//Components
import Avatar from 'components/Common/Avatar';
import Comments from 'components/Common/Comments';
import ImageSlider from 'components/Common/ImageSlider';
import { Labels } from 'components/Common/Labels';
import { SliderElements } from 'components/Common/SliderElements';
import Titles from 'components/Common/Titles';
import Btncards from 'components/Common/Btncards';

//useQuery
import { useQuery } from 'react-query';
import { getSinglePlaceData } from 'services/places.services';
import { getOwnerPlace } from 'services/places.services';

const classes={
  parentcon:'font-primary overflow-x-hidden',
  divsectioncon:'w-full',
  section:'px-8',
  titleicon:'flex flex-col md:flex-row p-2 mt-4 justify-between',
  auxiconcon:'flex flex-row',
  iconscon:'flex flex-col p-2 items-end',
  hearticon:'mr-22 phone:mr-27',
  staricon:'mr-10 phone:mr-28 sphone:mr-16',
  inforcon:'flex flex-col md:flex-row p-1 justify-between',
  avausercon:'flex',
  usercon:'flex flex-col justify-center items-center',
  likequalcon:'flex flex-row text-center',
  //spanlike:'mr-14 text-center content-center phone:mr-2 phone:text-sm',
  //spanquali:'mr-2 text-center content-center phone:mr-10 phone:text-sm',
  liketext:'mr-14',
  qualitext:'mr-10 sphone:mr-17',
  datecon:'"m-1 px-6',
  tagsdiv:'flex justify-start mt-4',
  tags:'mr-8',
  decriptioncon:'mt-8 mb-8',
  text:'mt-8 break-words',
 // mapcon:'',
  ubicationcon:'flex flex-col my-6',
  divubications:'flex flex-row items-center',
  ubication: 'ml-15 my-2',
 // commentcon:'',
  btn:'ml-9 py-2',
}
function OnePlace() {

  const useQueryMultiple = () => {

    const singlePlace = useQuery(['getSinglePlaceData', '6201dc77326d2c5c74344e77'], getSinglePlaceData)

    const ownerPlace = useQuery('getOwnerPlace', getOwnerPlace)
    return {singlePlace, ownerPlace}
  }

  const {singlePlace, ownerPlace} = useQueryMultiple()  
  console.log("ownerPlace: ",ownerPlace)
  
  const {data:dataPlace, isLoading:loadingPlace, status: statusPlace } = singlePlace
  const {data:dataOwnerPlace, isLoading:loadingOwnerPlace, status: statusOwnerPlace } = ownerPlace

  //otra forma de encontrar el username
  
  //const getOwnerUser = getOwnerPlace(dataPlace.ownerId)

  if(statusPlace === 'loading') {
    return <p> Loading...</p>
  }

  if(statusOwnerPlace === 'success')
  console.log(dataOwnerPlace) 

  if (statusPlace === 'success') {
    console.log(dataPlace) 

    

    return (
      <div className={classes.parentcon}>
        <ImageSlider slides={dataPlace.images} />
        <div className='w-full'>
          <section className='px-8'>
          <div className={classes.titleicon}>
            <Titles tag="h3" titleText={dataPlace.name}></Titles>
            <div className={classes.iconscon}>
             <div className='flex flex-row'>
             <HeartFillOut width="28" height="28" className={classes.hearticon} />
              
              <StarComplete width="28" height="28" className={classes.staricon} />
             
              <ThreePoints width="40" height="28" />
              
             </div> 
               <div className={classes.likequalcon} >
                 <div className={classes.liketext} >
                   <p>7</p>
                   <p>Me gusta</p>
                 </div>
                  <div className={classes.qualitext} > 
                   <p>5</p>
                   <p>Calificación</p>
                 </div>
               </div>  
                
              </div>
              
            </div>
           
            <div className={classes.inforcon}>
                <div className={classes.avausercon}>
                  <Avatar />
                  <div className={classes.usercon}>
                    <p>Agregado por</p>
                    <p>Nombre de Usuario</p>
                  </div>
                </div>
                
              </div>
              <div className={classes.datecon}>
                <p>Fecha de publicación</p>
              </div>
            
            <div className={classes.tagsdiv}>
              {dataPlace.tags.map((tag) => {
                return <Labels LabelText={tag} className={classes.tags}></Labels>
              })}
              
              
            </div>
          
              
          </section>
        </div>
        <div className='w-full'>     
          <section className='px-8'> 
          <div className={classes.decriptioncon}>
                  <Titles tag="h4" titleText="Descripción"></Titles>
                  <p className={classes.text}>
                    {dataPlace.description}                   
                  </p>
                </div>
                <div className={classes.mapcon}>
                  <img src={Map} alt="ejemplo de mapa" />
                </div>
                <div className={classes.ubicationcon}>
                  <div className={classes.divubications}>
                    <PinMap width="50" height="50" />
                    <p>Dirección de la Ubicación</p>
                  </div>
                  <div className={classes.ubication}>Ciudad: {dataPlace.address.city}</div>
                  <div className={classes.ubication}>Estado: {dataPlace.address.state}</div>
                  <div className={classes.ubication}>Calle: {dataPlace.address.street}</div>
                  <div className={classes.ubication}>C.P: {dataPlace.address.zipcode}</div>
                  
                </div>
                <Btncards className={classes.btn} buttonText="Reseñar" />
                <div className={classes.commentcon}>
                  <Comments />
                  <Comments />
                </div>
          </section>     
        </div> 
        
      </div>
      );
  }
  
  
  


  
}

export default OnePlace;

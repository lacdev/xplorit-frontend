import React from 'react';
import { useParams } from 'react-router-dom';
//Icons & Images
import HeartFillOut from "assets/icons/HeartFillOut";
import StarComplete from "assets/icons/StarComplete";
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
import MapComponent from 'components/MapComponent';
import HeaderOnePlace from 'components/HeaderOnePlace';

//useQuery
import { useQuery } from 'react-query';
import { getSinglePlaceData } from 'services/places.services';
import { getPlaceLikes } from 'services/places.services';

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

  const {id} = useParams();

  const singlePlace = useQuery(['getSinglePlaceData', id], getSinglePlaceData)
  
  const {data, isLoading, status} = singlePlace
  console.log("data: ",data)


  if(status === 'loading') {
    return <p> Loading...</p>
  }

  if (status === 'success') {
    const userToFind =  data.ownerId.toString()

    return (
      <div className={classes.parentcon}>
        <ImageSlider slides={data.images} />

        <div className='w-full'>
         {data?.ownerId&&<HeaderOnePlace 
         userId={userToFind} 
         title={data.name} 
         tags={data.tags} 
         likes={data.likes}
         updatedAt={data.updatedAt}
         average={data.average}/>}
        </div>

        <div className='w-full'>     
          <section className='px-8'> 
          <div className={classes.decriptioncon}>
                  <Titles tag="h4" titleText="Descripción"></Titles>
                  <p className={classes.text}>
                    {data.description}                   
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
                  <div className={classes.ubication}>Ciudad: {data.address.city}</div>
                  <div className={classes.ubication}>Estado: {data.address.state}</div>
                  <div className={classes.ubication}>Calle: {data.address.street}</div>
                  <div className={classes.ubication}>C.P: {data.address.zipcode}</div>
                  
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

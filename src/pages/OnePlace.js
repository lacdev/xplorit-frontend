import React from 'react';
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
 // commentcon:'',
  btn:'ml-9 py-2',
}
function OnePlace() {
  return (
  <div className={classes.parentcon}>
    <ImageSlider slides={SliderElements} />
    <div className='w-full'>
      <section className='px-8'>
      <div className={classes.titleicon}>
        <Titles tag="h3" titleText="Nombre del lugar"></Titles>
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
          <Labels LabelText="Actividades" className={classes.tags}></Labels>
          <Labels LabelText="Restaurante" className={classes.tags}></Labels>
          <Labels LabelText="Música" className={classes.tags}></Labels>
          <Labels LabelText="Familiar"></Labels>
        </div>
      
          
      </section>
    </div>
    <div className='w-full'>     
      <section className='px-8'> 
      <div className={classes.decriptioncon}>
              <Titles tag="h4" titleText="Descripción"></Titles>
              <p className={classes.text}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
                consectetur quidem nesciunt impedit reiciendis suscipit quia nam
                tempora excepturi quo, omnis provident, totam porro repellat esse,
                quod nihil aspernatur perspiciatis. Ducimus perspiciatis est repellat
                voluptas culpa adipisci! Dolorem sunt commodi voluptate repudiandae
                reiciendis vero et labore dolor, sapiente autem. Sit iure ratione
                provident a sequi autem tempore vero praesentium cumque. Illo placeat
                corrupti nobis autem, explicabo doloremque quis est sequi debitis
                quaerat, natus voluptatum harum voluptate ab, laboriosam dignissimos
                nulla facilis. Quibusdam doloribus in qui blanditiis quia doloremque!
               
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

export default OnePlace;

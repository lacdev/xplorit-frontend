import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import parse from 'html-react-parser';

//useQuery & services
import { useQuery } from 'react-query';
import { getSinglePlaceData } from 'services/places.services';
//import { getPlaceLikes } from 'services/places.services';
//import TextEditor from 'components/TextEditor';
//import { Marker } from '@react-google-maps/api';


//Components

import Comments from 'components/Common/Comments';
import ImageSlider from 'components/Common/ImageSlider';
import Titles from 'components/Common/Titles';
import Btncards from 'components/Common/Btncards';
import MapComponent from 'components/MapComponent';
import HeaderOnePlace from 'components/HeaderOnePlace';


//Icons & Images

import PinMap from 'assets/icons/PinMap';



const classes = {
  parentcon: 'font-primary overflow-x-hidden',
  divsectioncon: 'w-full',
  section: 'px-8',
  titleicon: 'flex flex-col md:flex-row p-2 mt-4 justify-between',
  auxiconcon: 'flex flex-row',
  iconscon: 'flex flex-col p-2 items-end',
  hearticon: 'mr-22 phone:mr-27',
  staricon: 'mr-10 phone:mr-28 sphone:mr-16',
  inforcon: 'flex flex-col md:flex-row p-1 justify-between',
  avausercon: 'flex',
  usercon: 'flex flex-col justify-center items-center',
  likequalcon: 'flex flex-row text-center',
  //spanlike:'mr-14 text-center content-center phone:mr-2 phone:text-sm',
  //spanquali:'mr-2 text-center content-center phone:mr-10 phone:text-sm',
  liketext: 'mr-14',
  qualitext: 'mr-10 sphone:mr-17',
  datecon: 'm-1 px-6',
  tagsdiv: 'flex justify-start mt-4',
  tags: 'mr-8',
  decriptioncon: 'mt-8 mb-8',
  text: 'mt-8 break-words',
  // mapcon:'',
  ubicationcon: 'flex flex-col my-6',
  divubications: 'flex flex-row items-center',
  ubication: 'ml-15 my-2',
  commentcon: 'mb-20',
  btn: 'ml-9 py-2',
  textEditorHidden: 'mt-10 hidden',
  textEditorShow: 'mt-10 block',
  btnForm: 'py-2 mt-3 text-right',
  textArea: 'border border-current rounded-md w-full min-h-[200px]',
};

function OnePlace() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [textEditorView, setTextEditorView] = useState(
    classes.textEditorHidden
  );

  const { id } = useParams();
  const singlePlace = useQuery(["getSinglePlaceData", id], getSinglePlaceData);
  const { data, status } = singlePlace;

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (data === undefined) {
      return;
    }

    const markerCoords = {
      lat: data.location.coordinates[1],
      lng: data.location.coordinates[0],
    };
    setSelectedLocation(markerCoords);
  }, [data, status]);

  const handleClick = () => {
    if (textEditorView === classes.textEditorHidden) {
      setTextEditorView(classes.textEditorShow);
    } else {
      setTextEditorView(classes.textEditorHidden);
    }
  };

  if (status === "loading") {
    return <p> Loading...</p>;
  }

  if (status === "success") {
    const userToFind = data.ownerId.toString();
    return (
      <div className={classes.parentcon}>
        <ImageSlider slides={data.images} />

        <div className='w-5/6 m-auto'>
          {data?.ownerId && (
            <HeaderOnePlace
              userId={userToFind}
              title={data.name}
              tags={data.tags}
              likes={data.likes}
              createdAt={data.createdAt}
              updatedAt={data.updatedAt}
              average={data.average}
            />
          )}
        </div>
        <div className='w-5/6 m-auto'>
          <section className='px-8'>
            <div className={classes.decriptioncon}>
              <Titles tag='h4' titleText="Descripción"></Titles>
              <p className={classes.text}>{parse(data.description)}</p>
            </div>
            <div className={classes.mapcon}>
              <MapComponent selectedLocation={selectedLocation} />
            </div>
            <div className={classes.ubicationcon}>
              <div className={classes.divubications}>
                <PinMap width="50" height="50" />
                <p>Dirección de la Ubicación</p>
              </div>
              <div className={classes.ubication}>
                Ciudad: {data.address.city}
              </div>
              <div className={classes.ubication}>
                Estado: {data.address.state}
              </div>
              <div className={classes.ubication}>
                Calle: {data.address.street}
              </div>
              <div className={classes.ubication}>
                C.P: {data.address.zipcode}
              </div>
            </div>
            <Btncards
              onClick={handleClick}
              className={classes.btn}
              buttonText="Reseñar"
            />
            <div className={textEditorView}>
              <form>
                <textarea type="text" className={classes.textArea}></textarea>
              </form>
              <Btncards
                className={classes.btnForm}
                buttonText={"Enviar Reseña"}
              />
            </div>
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

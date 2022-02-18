import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//Services & functions
import { createPlace } from 'services/places.services';
import { useMutation } from 'react-query';
import { AuthContext } from 'context/AuthContext';
//Components
import BigTile from 'components/Common/BigTitle';
import Inputs from 'components/Common/Inputs';
import TextEditor from '../components/TextEditor';
import TagSelector from 'components/TagSelector';
import PlaceSample from '../assets/img/playa.jpg';
import MapComponent from 'components/MapComponent';
import UploadImage from 'components/UploadImage';
import { formatGoogleMapsAdressToNormalAdress } from 'utils/utils';
import ExtraPlaceForRoute from 'components/ExtraPlaceForRoute';

const classes = {
  coverimg:'w-full max-h-[300px] object-cover',
  formcon:'w-2/3 mx-auto',
  label:'text-xl font-semibold',
  filecon:'flex w-full justify-center items-center h-96 rounded',
  editorcon:'my-4',
  btncon:'flex justify-end my-6 text-white',
  btn:'bg-secondary rounded-full py-1 px-4 hover:cursor-pointer',

}


function CreatePlace() {
  const [name, setName] = useState("");
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [placeImages, setPlaceImages] = useState([]);
  const [locationsData, setLocationsData] = useState([]);
  const { userState, setUserState } = useContext(AuthContext);
  const navigate = useNavigate();

  const mutationPost = useMutation(
    (data) => createPlace(data.data, data.placeImages),
    { onSuccess: () => console.log('Todo cool') }
  );

  const setTagValues = (tagOptions) => {
    setTags(tagOptions);
  };

  const saveImageToState = (imagesData) => {
    console.log(imagesData);
    setPlaceImages(imagesData);
  };

  const setSelectedLocationValue = (coords, address) => {
    setSelectedLocation(coords);
    setAddress(address);
    const locationsObject = {
      coords: coords,
      address: address[0].formatted_address,
    };
    const newLocationDataArray = [...locationsData, locationsObject];
    setLocationsData(newLocationDataArray);
  };
  console.log('Aqui es');

  const Publish = async (event) => {
    event.preventDefault();
    if (address == null || selectedLocation == null) {
      return;
    }
    const newTags = tags.map((tag) => {
      return tag.value;
    });
    const ownerId = "6200a26e64fdb24e699493d4";
    try {
      const data = {
        ownerId: ownerId,
        name,
        description,
        address: formatGoogleMapsAdressToNormalAdress(
          address[0].address_components
        ),
        tags: newTags,
        scheduleStart: "2022-02-11",
        scheduleFinish: "2022-01-27",
        location: {
          type: "Point",
          coordinates: [selectedLocation.lng, selectedLocation.lat],
        },
      };
      console.log(data, placeImages);
      if (userState.loggedIn == true) {
        mutationPost.mutate({ data, placeImages });
        navigate('/', { replace: true });
      } else {
        navigate('/login', { replace: true });
      }
      // await createPlace(data, placeImages);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      <img
        className={classes.coverimg}
        src={PlaceSample} alt='cover-img'
      ></img>
      <BigTile bigTitleText='Publica un nuevo lugar para la comunidad' />
      <form onSubmit={Publish} className={classes.formcon}>
        <label className={classes.label}>Título</label>
        <Inputs
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholderText='Escribe aquí el nombre del lugar'
        />
        <label className={classes.label}>
          Agrega las imágenes del lugar
        </label>
        <div className={classes.filecon}>
          <UploadImage value={placeImages} onImageAdd={saveImageToState} />
        </div>
        <label className={classes.label}>
          Danos una descripción del lugar
        </label>
        <div className={classes.editorcon}>
          <TextEditor
            value={description}
            onTextEditorChange={(value) => setDescription(value)}
          />
        </div>
        <label className={classes.label}>
          Elige hasta 4 tags relacionados al lugar
        </label>
        <div className={classes.editorcon}>
          <TagSelector setTagValues={setTagValues} tags={tags} />
        </div>
        <label className={classes.label}>
          ¿En qué dirección se ubica el lugar?
        </label>
        {/* <Inputs placeholderText='Escribe la dirección aquí'/> */}
        <div>
          <MapComponent
            selectedLocation={selectedLocation}
            setSelectedLocationOnInputSearch={setSelectedLocationValue}
            useOnePageSearch={true}
          />
          {locationsData &&
            locationsData.map((location, index) => {
              return (
                <ExtraPlaceForRoute
                  locationsData={locationsData}
                  setLocationsData={setLocationsData}
                  key={index}
                  deleteButtonIndex={index}
                  addressFromMap={location.address}
                />
              );
            })}
        </div>
        <div className={classes.btncon}>
          <input
            className={classes.btn}
            type='submit'
            value='Publicar'
          />
          {/* <Btncards onClick={Publish} className='py-1' buttonText='Publicar' /> */}
        </div>
      </form>
    </div>
  );
}
export default CreatePlace;
import React, { useEffect } from 'react';
import {useState} from 'react';
import BigTile from 'components/Common/BigTitle';
import Inputs from 'components/Common/Inputs';
import TextEditor from '../components/TextEditor';
import TagSelector from 'components/TagSelector';
import PlaceSample from '../assets/img/playa.jpg';
import MapComponent from 'components/MapComponent';
import UploadImage from 'components/UploadImage';
import { formatGoogleMapsAdressToNormalAdress } from 'utils/utils';
import { createPlace } from 'services/places.services';
import ExtraPlaceForRoute from 'components/ExtraPlaceForRoute';
import PinMap from 'assets/icons/PinMap'
import DeleteX from 'assets/icons/DeleteX'

export default function CreateRoute({}) {
  const [name, setName] = useState("")
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)
  const [placeImages, setPlaceImages] = useState([])
  const [locationsData, setLocationsData] = useState([])

  const setTagValues = (tagOptions) => {
    setTags(tagOptions)
  }

  const saveImageToState = (imagesData) =>{
    console.log(imagesData)
    setPlaceImages(imagesData)
  }

  // useEffect(()=>{
  //   console.log("Estas cambiando locatiosData", locationsData)
  // },[locationsData])


  const setSelectedLocationValue = (coords, address) => {
    setSelectedLocation(coords)
    setAddress(address)
    const locationsObject = {
      coords: coords,
      address: address[0].formatted_address
    }
    const newLocationDataArray = [...locationsData, locationsObject]
    setLocationsData(newLocationDataArray)
    console.log(newLocationDataArray)
    
  }

  console.log("Aqui es para breakpoint")

  const Publish = async (event) => {
    event.preventDefault();
    if (address == null || selectedLocation == null){
      return 
    }
    // const date = new Date();
    const newTags = tags.map ((tag) =>{
      return tag.value
    })

    const newCoords = locationsData.map ((location) => {
      const coordsArray = [location.coords.lng, location.coords.lat]
      return coordsArray
    })

    const ownerId = "6200a26e64fdb24e699493d4"
    try {
      const data = {
        ownerId: ownerId,
        name,
        description,
        address : formatGoogleMapsAdressToNormalAdress(address[0].address_components),
        tags : newTags,
        scheduleStart:"2022-02-11",
	      scheduleFinish:"2022-01-27",
        location : {
          type : "Multipoint",
          coordinates: newCoords
        }
      };
      console.log("Entreando a Submit", data)
      await createPlace(data, placeImages);
      // {mutate(data)}
    } catch (error) {
      console.error(error.message);
    }
  }



  return <div>
    <img className='w-full max-h-[300px] object-cover brightness-50' src={PlaceSample}></img>
    <BigTile bigTitleText='Publica un nuevo lugar para la comunidad'/>
    <form  className='w-2/3 mx-auto'>
      <label className='text-xl font-semibold'>Título</label>
      <Inputs value={name} onChange={(event)=> setName(event.target.value)} placeholderText="Escribe aquí el nombre del lugar"/>
      <label className='text-xl font-semibold'>Agrega las imágenes del lugar</label>
      <div className='flex w-full justify-center items-center h-96 rounded'>
        <UploadImage value={placeImages} onImageAdd={saveImageToState}/>
      </div>
      <label className='text-xl font-semibold'>Danos una descripción del lugar</label>
      <div  className='my-4'>
        <TextEditor value={description} onTextEditorChange={(value) => setDescription(value)} />
      </div>
      <label className='text-xl font-semibold'>Elige hasta 4 tags relacionados al lugar</label>
      <div className='my-4'>
        <TagSelector setTagValues={setTagValues} tags={tags} />
      </div>
      <label className='text-xl font-semibold'>¿En qué dirección se ubica el lugar?</label>
      <div>
        <MapComponent 
          selectedLocation={selectedLocation} 
          locationsData={locationsData} 
          useMultipleLocations={true} 
          setSelectedLocationOnInputSearch={setSelectedLocationValue} 
          useOnePageSearch= {true}/>
      </div>
      {
        locationsData && locationsData.map((location, index)=>{
          return <ExtraPlaceForRoute locationsData={locationsData} setLocationsData={setLocationsData} key={index} deleteButtonIndex={index} addressFromMap={location.address}/>
        })
      }
      <div className='flex justify-end my-6 text-white'>
        <button className="bg-secondary rounded-xl py-1 px-4" onClick= {Publish}>Publicar</button>
        {/* <Btncards onClick={Publish} className='py-1' buttonText='Publicar' /> */}
      </div>
    </form>
  </div>;
}
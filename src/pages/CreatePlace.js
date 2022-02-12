import React from 'react';
import {useState} from 'react';
import BigTile from 'components/Common/BigTitle'
import Inputs from 'components/Common/Inputs'
import AddImage from '../assets/icons/AddImage'
import TextEditor from '../components/TextEditor'
import TagSelector from 'components/TagSelector';
import Btncards from 'components/Common/Btncards';
import PlaceSample from '../assets/img/playa.jpg'
import MapComponent from 'components/MapComponent';
import UploadImage from 'components/UploadImage';
import { formatGoogleMapsAdressToNormalAdress } from 'utils/utils';

export default function CreatePlace({}) {
  const [name, setName] = useState("")
  const [tags, setTags] = useState([]);
  const [description, setDescription] = useState("")
  const [address, setAddress] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)

  const setTagValues = (tagOptions) => {
    setTags(tagOptions)
  }

  const setSelectedLocationValue = (coords, address) => {
    setSelectedLocation(coords)
    setAddress(address)
  }

  const Publish = async (event) => {
    event.preventDefault();
    if (address == null || selectedLocation == null){
      return 
    }
    const date = new Date();
    const name = ""
    const newTags = tags.map ((tag) =>{
      return tag.value
    })

    try {
      const data = {
        name,
        description,
        address : formatGoogleMapsAdressToNormalAdress(address[0].address_components),
        tags : newTags,
        scheduleStart:"2022-02-11",
	      scheduleFinish:"2022-01-27",
        location : {
          type : "point",
          coordinates: [selectedLocation.lat, selectedLocation.lng]
        }
      };
      console.log(data)
      // await createPlace(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return <div>
    <img className='w-full max-h-[300px] object-cover brightness-50' src={PlaceSample}></img>
    <BigTile bigTitleText='Publica un nuevo lugar para la comunidad'/>
    <form className='w-2/3 mx-auto'>
      <label className='text-xl font-semibold'>Título</label>
      <Inputs value={name} onChange={(event)=> setName(event.target.value)} placeholderText="Escribe aquí el nombre del lugar"/>
      <label className='text-xl font-semibold'>Agrega las imágenes del lugar</label>
      <div className='flex w-full justify-center items-center h-96 rounded'>
        <UploadImage/>
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
        {/* <Inputs placeholderText='Escribe la dirección aquí'/> */}
        <div>
          <MapComponent selectedLocation={selectedLocation} setSelectedLocationOnInputSearch={setSelectedLocationValue} useOnePageSearch= {true}/>
        </div>
      <div className='flex justify-end my-6'>
        <Btncards onClick={Publish} className='py-1' buttonText='Publicar' />
      </div>
    </form>
  </div>;
}

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

export default function CreatePlace({}) {
  const [tags, setTags] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null)

  const setTagValues = (tagOptions) => {
    setTags(tagOptions)
  }

  const setSelectedLocationValue = (coords) => {
    setSelectedLocation(coords)
  }
  return <div>
    <img className='w-full max-h-[300px] object-cover brightness-50' src={PlaceSample}></img>
    <BigTile bigTitleText='Publica un nuevo lugar para la comunidad'/>
    <form className='w-2/3 mx-auto'>
      <label className='text-xl font-semibold'>Título</label>
      <Inputs placeholderText="Escribe aquí el nombre del lugar"/>
      <label className='text-xl font-semibold'>Agrega las imágenes del lugar</label>
      <div className='flex w-full justify-center items-center h-96 rounded'>
        <UploadImage/>
      </div>
      <label className='text-xl font-semibold'>Danos una descripción del lugar</label>
      <div  className='my-4'>
        <TextEditor/>
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
        <Btncards className='py-1' buttonText='Publicar' />
      </div>
    </form>
  </div>;
}

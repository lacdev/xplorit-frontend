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


export default function CreatePlace({}) {
  const [tags, setTags] = useState([]);

  const setTagValues = (tagOptions) => {
    setTags(tagOptions)
}
  return <div>
    <img className='w-full max-h-[300px] object-cover brightness-50' src={PlaceSample}></img>
    <BigTile bigTitleText='Publica un nuevo lugar para la comunidad'/>
    <form className='w-5/6 mx-auto'>
      <label className=''>Título</label>
      <Inputs placeholderText="Escribe aquí el nombre del lugar"/>
      <label>Agrega las imágenes del lugar</label>
      <div className='flex w-full justify-center items-center h-16 my-3 bg-gray-200 rounded'>
        <AddImage/>
        <p >Seleccionar imágenes</p>
      </div>
      <label >Danos una descripción del lugar</label>
      <div  className='my-4'>
        <TextEditor/>
      </div>
      <label>Elige hasta 4 tags relacionados al lugar</label>
      <div className='my-4'>
        <TagSelector setTagValues={setTagValues} tags={tags} />
      </div>
      <label>¿En qué dirección se ubica el lugar?</label>
      <Inputs placeholderText='Escribe la dirección aquí'/>
      <div>
        <MapComponent/>
      </div>
      <div className='flex justify-end my-6'>
        <Btncards className='py-1' buttonText='Publicar' />
      </div>
    </form>
  </div>;
}

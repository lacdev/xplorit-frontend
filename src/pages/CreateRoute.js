import React from 'react';
import {useState} from 'react';
import BigTile from 'components/Common/BigTitle'
import Inputs from 'components/Common/Inputs'
import AddImage from '../assets/icons/AddImage'
import TextEditor from '../components/TextEditor'
import TagSelector from 'components/TagSelector';
import MapSample from '../assets/img/mapsample.png'
import Btncards from 'components/Common/Btncards';

export default function CreateRoute({}) {
  const [tags, setTags] = useState([]);

  const setTagValues = (tagOptions) => {
    setTags(tagOptions)
}
  return <div>
    <BigTile bigTitleText='Publica una nueva ruta para la comunidad'/>
    <form className='w-5/6 mx-auto'>
      <label className=''>Título</label>
      <Inputs placeholderText="Escribe aquí el nombre de la ruta"/>
      <label>Agrega las imágenes de la ruta</label>
      <div className='flex w-full justify-center items-center h-16 my-3 bg-gray-200 rounded'>
        <AddImage/>
        <p >Seleccionar imágenes</p>
      </div>
      <label >Danos una descripción del paseo que vas a agregar</label>
      <div  className='my-4'>
        <TextEditor/>
      </div>
      <label>Elige hasta 4 tags relacionados a la ruta</label>
      <div className='my-4'>
        <TagSelector setTagValues={setTagValues} tags={tags} />
      </div>
      <label>¿Qué direcciones conforman esta ruta?</label>
      <Inputs placeholderText='Escribe la dirección aquí'/>
      <img src={MapSample}></img>
      <div className='flex justify-end my-6'>
        <Btncards className='py-1' buttonText='Publicar' />
      </div>
    </form>
  </div>;
}
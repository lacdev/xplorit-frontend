import React from 'react';
import {useState} from 'react';
import BigTile from 'components/Common/BigTitle'
import Inputs from 'components/Common/Inputs'
import AddImage from '../assets/icons/AddImage'
import TextEditor from '../components/TextEditor'

export default function CreatePlace() {
  return <div>
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
      
    </form>
  </div>;
}

import React from 'react';
import playa from 'assets/img/playa.jpg'
import { Labels } from '../Common/Labels';
import Edit from 'assets/icons/Edit';
import Trash from 'assets/icons/Trash';
import HeartComplete from 'assets/icons/HeartComplete';

export default function DashboardLikeCard() {
  return <div className='inline-flex w-full bg-white shadow-md rounded-md font-primary m-6'>
      <div className='w-1/3'>
        <img className='rounded-md'src={playa} alt='' ></img>
      </div>
      <div className='w-full'>
        <div className='w-full inline-flex justify-start content-center'>
            <h2 className='text-2xl font-bold m-8'>Costa de Playa del Carmen</h2>
            <div className='my-auto items-center justify-center text-center'>
                <HeartComplete width='28' height='28'/> 
            </div>
        </div>
        <div className='flex'>
            <div className='flex ml-10 justify-start'>
                <Labels LabelText="Playa"/>
                <Labels LabelText="Aire Libre"/>
                <Labels LabelText="Aventura"/>
            </div>
        </div>
      </div>
  </div>;
}
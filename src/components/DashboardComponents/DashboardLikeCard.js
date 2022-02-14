import React from 'react';
import playa from 'assets/img/playa.jpg'
import { Labels } from '../Common/Labels';
import HeartComplete from 'assets/icons/HeartComplete';

//useQuery
import { useQuery } from 'react-query';
import { getLikesCreatedByUser } from 'services/user.services';


export default function DashboardLikeCard() {
  
  const id = '61ef68279262e2f167700caf'

  const getLikes = useQuery(["getLikes", id], getLikesCreatedByUser)
  const {data, status, error} = getLikes

  if(error === true) {
    console.log("un error ha ocurrido: ", error)
    return <span> Ha ocurrido un error al realizar la peticion</span>
  }

  if (status === 'success') {
    console.log("data: ", data)
  }


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
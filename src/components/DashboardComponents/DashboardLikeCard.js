import React from 'react';
import playa from 'assets/img/playa.jpg'
import { Labels } from '../Common/Labels';
import HeartComplete from 'assets/icons/HeartComplete';

//useQuery
import { useQuery } from 'react-query';
import { getSinglePlaceData } from 'services/places.services';



export default function DashboardLikeCard(placeId) {

   const id = placeId.placeId
   console.log("id: ",id)
  const singlePlace = useQuery(['getSinglePlaceData', id], getSinglePlaceData)
  
  const {data, status} = singlePlace


  if(status === 'loading') {
    return <p> Loading...</p>
  }

 if(status === 'success'){
   console.log("data: ",data)
 }

  return <div className='inline-flex w-full bg-white shadow-md rounded-md font-primary m-6'>
      <div className='w-1/3'>
        <img className='rounded-md'src={data.images[0]} alt='' ></img>
      </div>
      <div className='w-full'>
        <div className='w-full inline-flex justify-start content-center'>
            <h2 className='text-2xl font-bold m-8'>{data.name}</h2>
            <div className='my-auto items-center justify-center text-center'>
                <HeartComplete width='28' height='28'/> 
            </div>
        </div>
        <div className='flex'>
            <div className='flex ml-10 justify-start'>
               {data&&data.tags.map((tag) => {
                 return <Labels LabelText={tag}/>
               })}
                
            </div>
        </div>
      </div>
  </div>;
}
import React from "react";
import playa from "assets/img/playa.jpg";
import { Labels } from "../Common/Labels";
import HeartComplete from "assets/icons/HeartComplete";

//useQuery
import { useQuery } from "react-query";
import { getSinglePlaceData } from "services/places.services";

export default function DashboardLikeCard({ id, name, type, images, tags }) {
  const cardLink = `/${type}/${id}`;
  return (
    <div className=' m-auto flex w-fit mb-5 bg-white shadow-md rounded-md'>
      <div className='max-w-xs mr-5'>
        <img
          className='rounded-l-lg bg-contain sm:min-h-cardHeight sm:min-w-cardWidth sm:shrink-0'
          src={images}
          alt=''
        ></img>
      </div>
      <div className='  '>
        <div className='w-full  justify-start mt-5 content-center flex flex-wrap'>
          <h2 className='text-2xl  font-bold   w-80'>{name}</h2>
          <div className='my-auto  items-end mr-5 '>
            <HeartComplete width='28' height='28' />
          </div>
        </div>
        <div className=''>
          <div className='flex flex-wrap '>
            {tags &&
              tags.map((tag) => {
                return <Labels LabelText={tag} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}
/*const cardLink = `/${type}/${id}`;
  return (
    <div className='inline-flex sm:m-auto lg:w-full md:w-full sm:w-full bg-white shadow-md rounded-md font-primary m-6 sm:min-w-full'>
      <div className='w-1/3 sm:min-w-32 bg-cover grid'>
        <img
          className='rounded-md bg-cover sm:bg-cover min-h-full min-w-full'
          src={images}
          alt=''
        ></img>
      </div>
      <div className='w-full'>
        <div className='w-full  justify-start content-center grid'>
          <h2 className='text-2xl font-bold m-8'>{name}</h2>
          <div className='my-auto items-center justify-center text-center justify-items-end'>
            <HeartComplete width='28' height='28' />
          </div>
        </div>
        <div className='flex'>
          <div className='flex ml-10 justify-start'>
            {tags &&
              tags.map((tag) => {
                return <Labels LabelText={tag} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );*/

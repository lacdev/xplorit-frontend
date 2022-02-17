import React from "react";
import { Labels } from "../Common/Labels";
import StarHalf from "assets/icons/StarHalf";
import Edit from "assets/icons/Edit";
import Trash from "assets/icons/Trash";

export default function DashboardCard({ cardData }) {
  console.log("cardData ", cardData);
  return (
    <div className='m-auto flex w-fit mb-5 bg-white shadow-md rounded-md'>
      <div className='max-w-xs mr-5'>
        <img
          className='rounded-l-lg bg-contain sm:min-h-cardHeight sm:min-w-cardWidth sm:shrink-0'
          src={cardData.images[0]}
          alt=''
        ></img>
      </div>
      <div className=''>
        <div className='w-full  justify-start mt-5 content-center flex flex-wrap'>
          <div className='w-fit'>
            <h2 className='text-2xl  font-bold   w-80 '>{cardData.name}</h2>
          </div>
          <div className='my-auto  items-end mr-5'>
            <StarHalf width='28' height='28' />
            <p className='text-md mt-1 ml-2.5'>{cardData.average}</p>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-wrap '>
            {cardData.tags &&
              cardData.tags.map((tag) => {
                return <Labels LabelText={tag} />;
              })}
          </div>
          <div className='flex w-1/3 justify-evenly mt-5'>
            <div className='inline-flex w-full justify-center'>
              <div className='flex-col mr-2'>
                <div className='flex justify-center '>
                  <Edit className='' width='28' height='28' />
                </div>
                <p className='text-md mt-1'>Editar</p>
              </div>
            </div>
            <div className='inline-flex justify-center  '>
              <div className='flex-col'>
                <div className='flex justify-center'>
                  <Trash />
                </div>
                <p className='text-md mt-1'>Eliminar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

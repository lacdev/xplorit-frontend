import React from 'react';
import playa from 'assets/img/playa.jpg'
import { Labels } from '../Common/Labels';
import StarHalf from 'assets/icons/StarHalf';
import Edit from 'assets/icons/Edit';
import Trash from 'assets/icons/Trash';

export default function DashboardCard({name}) {
  return <div className='inline-flex w-full bg-white shadow-md rounded-md font-primary m-6'>
      <div className='w-1/3 h-full'>
        <img className='rounded-md' src={playa} alt=""></img>
      </div>
      <div className='w-full'>
        <div className='w-full inline-flex justify-start content-center'>
            <div className='w-5/6'>
                <h2 className='text-2xl font-bold m-8'>{name}</h2>
            </div>
            <div className='flex-col items-center justify-center mt-6 ml-4 text-center'>
                <StarHalf width='28' height='28'/> 
                <p className='text-md mt-1'>4.5</p>
            </div>
        </div>
        <div className='flex'>
            <div className='flex ml-10 justify-start'>
                <Labels LabelText="Playa"/>
                <Labels LabelText="Aire Libre"/>
                <Labels LabelText="Aventura"/>
                <Labels LabelText="Familiar"/>
            </div>
            <div className='flex w-1/3 justify-evenly'>
                <div className='inline-flex w-full justify-center'>
                    <div className='flex-col'>
                        <div className='flex justify-center'>
                            <Edit className='' width='28' height='28'/>
                        </div>
                        <p className='text-md mt-2'>Edit</p>
                    </div>
                </div>
                <div className='inline-flex justify-center '>
                    <div className='flex-col'>
                        <div className='flex justify-center'>
                            <Trash />
                        </div>
                        <p className='text-md mt-2'>Delete</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>;
}

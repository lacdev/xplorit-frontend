import React from 'react';
import profilepic from 'assets/img/profilepic.jpg';
import ProfileUsername from './ProfileUsername';


export default function DashboardAvatar() {
  return <div className=' h-full w-full relative'>
    <div className='flex-col absolute w-full top-[-100px]'>
      <img className='rounded-full w-[200px] border-solid border-8 m-auto border-secondary' src={profilepic}></img>
      <ProfileUsername/>
    </div>
  </div>;
}

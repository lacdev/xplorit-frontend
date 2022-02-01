import React from 'react';
import profilepic from 'assets/img/profilepic.jpg';


export default function DashboardAvatar() {
  return <div className='h-full w-full static'>
    <div>
      <img className='rounded-full border-solid border-8 border-secondary' src={profilepic}></img>
    </div>
    {/* <div className='h-2/3 w-full bg-secondary absolute inset-x-0 bottom-0'>
    </div> */}
  </div>;
}

import React from 'react';
import image from 'assets/img/image.jpg'

export default function DashboardBanner() {
  return <div className=''>
      <img className='w-full max-h-[20vh] object-cover object-bottom brightness-50' src={image}></img>
  </div>;
}

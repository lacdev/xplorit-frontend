import React from 'react';


export default function DashboardSideButton({DashboardButtonText, SvgIcon}) {
  return <div className='inline-flex w-full justify-center bg-secondary text-white p-4 border-solid border-white border-t-2 content-center hover:bg-[#2a4b9d]'>
      <SvgIcon />
      <p className='px-4'>{DashboardButtonText}</p>
  </div>;
}

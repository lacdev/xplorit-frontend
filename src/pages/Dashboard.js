import BigTitle from 'components/Common/BigTitle';
import DashboardBanner from 'components/DashboardComponents/DashboardBanner';
import DashboardSideBar from 'components/DashboardComponents/DashboardSideBar';
import NavBar from 'components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return <div className='grid grid-cols-10 gap-4'>
    <NavBar/>
    <div className='w-full col-span-10 bg-top'>
      <DashboardBanner/>
    </div>
    <div className='w-full col-span-2'>
      <DashboardSideBar/>
    </div>
    <div className='grid grid-rows-10 grid-flow-col gap-0 col-span-8'>
      <div >
        <BigTitle className='flex justify-start' bigTitleText='Rutas creadas'/>
      </div>
      <div className='w-full row-start-2'>
        <Outlet/>
      </div>
    </div>
  </div>;
}

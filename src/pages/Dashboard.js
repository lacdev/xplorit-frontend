import BigTitle from 'components/Common/BigTitle';
import DashboardBanner from 'components/DashboardComponents/DashboardBanner';
import DashboardSideBar from 'components/DashboardComponents/DashboardSideBar';
import NavBar from 'components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return <div className='grid grid-cols-10'>
    <div className='w-full col-span-10 bg-top'>
      <DashboardBanner/>
    </div>
    <div className='w-full h-[100vh] col-span-2'>
      <DashboardSideBar/>
    </div>
    <div className='flex-col col-span-8 min-h-[100vh]'>
      <div >
        <BigTitle className='flex justify-start' bigTitleText='Rutas creadas'/>
      </div>
      <div className='w-full row-start-2'>
        <Outlet/>
      </div>
    </div>
  </div>;
}

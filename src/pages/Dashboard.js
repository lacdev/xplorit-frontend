import BigTitle from 'components/Common/BigTitle';
import DashboardBanner from 'components/DashboardComponents/DashboardBanner';
import DashboardSideBar from 'components/DashboardComponents/DashboardSideBar';
//import NavBar from 'components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery} from 'react-query'
import { getUserProfilePic } from 'services/user.services';
import DirectAccess from 'components/DashboardComponents/DirectAccess';



export default function Dashboard() {

  // const profilePic = useQuery (['getSingleUserData', '6200a26e64fdb24e699493d4'], getUserProfilePic)
  // const {data, status} = profilePic
  // if (status === 'success'){
  //   console.log('data', data)
  // }

  return (
    <div className="grid grid-cols-10">
      <div className="w-full col-span-10 bg-top">
        <DashboardBanner />
      </div>
      <div className="w-full h-full col-span-2 hidden md:block">
        <DashboardSideBar />
      </div>
      
      <div className="flex-col col-span-8 min-h-[100vh]">
        <div>
          <BigTitle
            className="flex justify-start"
            bigTitleText="Rutas creadas"
          />
        </div>
        <div className=" flex w-5/6 mx-auto my-4">
          <Outlet />
        </div>
      </div>
      <div className='fixed bottom-0 min-w-full'>
      <DirectAccess />
      </div>
    </div>
  );
}

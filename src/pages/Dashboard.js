import BigTitle from 'components/Common/BigTitle';
import DashboardBanner from 'components/DashboardComponents/DashboardBanner';
import DashboardSideBar from 'components/DashboardComponents/DashboardSideBar';

//import NavBar from 'components/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useQuery} from 'react-query'
import { getUserProfilePic } from 'services/user.services';

export default function Dashboard() {

  const id = '61ef68279262e2f167700caf'

  const getUser = useQuery(['getUserProfilePic',id],getUserProfilePic)

  const { data, status } = getUser

  return (
    <div className='grid grid-cols-10'>
      <div className='w-full col-span-10 bg-top'>
        {status === 'loading' ? <span> Loading</span> : <DashboardBanner coverPhoto={data.coverPhoto}/>}
      </div>
      <div className='w-full h-full col-span-2 hidden md:block'>
        {status === 'loading' ? <span> Loading</span> : <DashboardSideBar avatar={data.avatar} username={data.username}/>}
      </div>
      <div className='flex-col col-span-8 min-h-[100vh]'>
      <div >
        <BigTitle className='flex justify-start' bigTitleText='Rutas creadas'/>
        </div>
      <div className=' flex w-5/6 mx-auto my-4'>
        {status === 'loading' ? <span> Loading</span> :<Outlet/>}
      </div>
    </div>
</div>)
  
}


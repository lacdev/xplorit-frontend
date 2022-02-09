import React from 'react';
import AddImageDashboard from 'assets/icons/AddImageDashboard'
import Btncards from 'components/Common/Btncards';

export default function DashboardEdit() {
  return <div className='flex-col mx-auto text-center'>
      <p className='text-xl font-semibold'>Cambiar foto de usuario</p>
      <div className='flex justify-center px-20 py-10 bg-gray-200 rounded my-6'>
        <AddImageDashboard height='50' width='50'/>
      </div>
      <Btncards className='py-1 mb-10'buttonText='Agregar imagen'/>
      <p className='text-xl font-semibold'>Cambiar foto del banner</p>
      <div className='flex justify-center px-20 py-10 bg-gray-200 rounded my-6'>
        <AddImageDashboard height='50' width='50'/>
      </div>
      <Btncards className='py-1'buttonText='Agregar imagen'/>
          

  </div>;
}

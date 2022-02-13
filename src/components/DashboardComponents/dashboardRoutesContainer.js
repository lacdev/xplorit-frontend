import React from 'react';
//Usequery
import { useQuery} from 'react-query'
import { getRoutesCreatedByUser } from 'services/user.services';
import DashboardCard from './DashboardCard';

export default function DashboardRoutesContainer() {

 const id = '6201de6ad880bfeebd02b35e'

 const getRoutes = useQuery(["getRoutes", id], getRoutesCreatedByUser)
 
 const { data, status } = getRoutes

 if(status === 'loading') {
     return <span> Loading...</span>
 }

if(status === 'error') {
    return <span className='font-bold text-center'>No se encontraron Rutas con ese ID</span>
}


  return <>
        {data&&data.map((route) =>{
          console.log("data: ",data)
        return <DashboardCard key={route._id} cardData={route}/>
        })}
    </>
   
}

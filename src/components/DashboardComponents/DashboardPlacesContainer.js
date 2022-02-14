import React from 'react';
import BigTitle from 'components/Common/BigTitle';


//Usequery
import { useQuery} from 'react-query'
import { getPlacesCreatedByUser } from 'services/user.services';
import DashboardCard from './DashboardCard';

export default function DashboardPlacesContainer() {

 const id = '61ff09c5f1b8eb106745942f'

 const getPlaces = useQuery(["getPlaces", id], getPlacesCreatedByUser)
 
 const { data, status } = getPlaces

 if(status === 'loading') {
     return <span> Loading...</span>
 }

  if(status === 'error') {
    return <span className='font-bold text-center'>No se encontraron lugares con ese ID</span>
  }

  return <>
        <BigTitle bigTitleText='Lugares creados'/>
        {data&&data.map((place) =>{
        return <DashboardCard key={place._id} cardData={place}/>
        })}
    </>
   
}

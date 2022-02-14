import React from 'react';
import BigTitle from 'components/Common/BigTitle';
import Btncards from 'components/Common/Btncards';
import { Link } from 'react-router-dom';


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

  return <div>
          <div className='text-right'>
            <BigTitle bigTitleText='Lugares agregados'/>
            <Link to="/createplace">
              <Btncards className="py-1" buttonText="+ Crear un lugar"/>
            </Link>
          </div>
        {data&&data.map((place) =>{
        return <DashboardCard key={place._id} cardData={place}/>
        })}
    </div>
   
}

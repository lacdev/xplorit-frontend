import React from 'react';
import BigTitle from 'components/Common/BigTitle';
//Usequery
import { useQuery} from 'react-query'
import { getRoutesCreatedByUser } from 'services/user.services';
import DashboardCard from './DashboardCard';
import Btncards from 'components/Common/Btncards';
import { Link } from 'react-router-dom';

export default function DashboardRoutesContainer() {

 const id = '61ef68279262e2f167700caf'

 const getRoutes = useQuery(["getRoutes", id], getRoutesCreatedByUser)
 
 const { data, status } = getRoutes

 if(status === 'loading') {
     return <span> Loading...</span>
 }

if(status === 'error') {
    return <span className='font-bold text-center'>No se encontraron Rutas con ese ID</span>
}


  return <div>
        <div className='text-right'>
          <BigTitle bigTitleText='Rutas creadas'/>
          <Link to="/createroute">
            <Btncards className="py-1" buttonText="+ Crea una ruta"/>
          </Link>
        </div>
        {data&&data.map((route) =>{
          console.log("data: ",data)
        return <DashboardCard key={route._id} cardData={route}/>
        })}
    </div>
   
}

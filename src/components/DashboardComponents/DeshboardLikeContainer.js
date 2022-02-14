import React from 'react';
import DashboardLikeCard from './DashboardLikeCard'
import BigTitle from 'components/Common/BigTitle';

//UseQuery
import { useQuery } from 'react-query';
import { getLikesCreatedByUser } from 'services/user.services';

export default function DashboardLikeContainer() {

  const id = '61ef68279262e2f167700caf'

  const getLikes = useQuery(["getLikes", id], getLikesCreatedByUser)
  const {data, status, error} = getLikes

  if(error === true) {
    console.log("un error ha ocurrido: ", error)
    return <span> Ha ocurrido un error al realizar la peticion</span>
  }

  if(status === 'success'){
    console.log("data: ",data[0].placeId)
  }

  return (
  <div>
    <div>
      <BigTitle bigTitleText='Likes'/>
    </div>
    {data&&data.map((like) => {
      return <DashboardLikeCard  placeId={like.placeId}/>
    })}
  </div>)
}

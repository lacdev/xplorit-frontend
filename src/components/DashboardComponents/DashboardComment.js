import React from 'react';
import playa from 'assets/img/playa.jpg'
import { Labels } from '../Common/Labels';
import StarHalf from 'assets/icons/StarHalf';
import Edit from 'assets/icons/Edit';
import Trash from 'assets/icons/Trash';
import Avatar from 'components/Common/Avatar';

//UseQuery
import { useQuery} from 'react-query'
import { getCommentsCreatedByUser } from 'services/user.services';

export default function DashboardComment() {

    const id = '61ef68279262e2f167700caf'

    const getComments = useQuery(["getComments", id], getCommentsCreatedByUser)
    const { data, status, error } = getComments

    if(error === true) {
        console.log("an errro had happend")
    }

    if (status === 'succes') {
        console.log(data)
    }



  return <div className='w-full bg-white shadow-md rounded-md font-primary m-6'>
      <div className='inline-flex justify-start items-center w-full px-10'>
          <Avatar/>
          <p>Name of Place</p>
      </div>
      <div className='text-justify px-10 py-3'>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
          </p> <br></br>
      </div>
  </div>;
}

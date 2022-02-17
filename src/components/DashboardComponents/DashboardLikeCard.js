import React from 'react';
import { Link } from 'react-router-dom';
import { Labels } from '../Common/Labels';
import HeartComplete from 'assets/icons/HeartComplete';

export default function DashboardLikeCard({ id, name, type, images, tags }) {
  const cardLink = `/${type}/${id}`;
  return (
    <Link to={cardLink}>
      <div className=' m-auto flex w-fit mb-5 bg-white shadow-md rounded-md'>
        <div className='max-w-xs mr-5'>
          <img
            className='rounded-l-lg bg-contain sm:min-h-cardHeight sm:min-w-cardWidth sm:shrink-0'
            src={images}
            alt=''
          ></img>
        </div>
        <div className=''>
          <div className='w-full  justify-start mt-5 content-center flex flex-wrap'>
            <h2 className='text-2xl  font-bold   w-80'>{name}</h2>
            <div className='my-auto  items-end mr-5 '>
              <HeartComplete width='28' height='28' />
            </div>
          </div>
          <div className=''>
            <div className='flex flex-wrap '>
              {tags &&
                tags.map((tag) => {
                  return <Labels LabelText={tag} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

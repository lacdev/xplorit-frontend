import React from 'react';
import { Link } from 'react-router-dom';
//Components
import { Labels } from '../Common/Labels';
//Icons
import HeartComplete from 'assets/icons/HeartComplete';

const classes={
     bodycon:' m-auto flex w-fit mb-5 bg-white shadow-md rounded-md',
     imgcon:'max-w-xs mr-5',
     img:'rounded-l-lg bg-contain sm:min-h-cardHeight sm:min-w-cardWidth sm:shrink-0',
     infocon:'w-full justify-start mt-5 content-center flex flex-wrap',
     title:'text-2xl font-bold w-80',
     iconcon:'my-auto  items-end mr-5',
     labelscon:'flex flex-wrap ',

}

function DashboardLikeCard({ id, name, type, images, tags }) {
  const cardLink = `/${type}/${id}`;
  return (
    <Link to={cardLink}>
      <div className={classes.bodycon}>
        <div className={classes.imgcon}>
          <img
            className={classes.img}
            src={images}
            alt=''
          ></img>
        </div>
        <div className=''>
          <div className={classes.infocon}>
            <h2 className={classes.title}>{name}</h2>
            <div className={classes.iconcon}>
              <HeartComplete width='28' height='28' />
            </div>
          </div>
          <div className=''>
            <div className={classes.labelscon}>
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
export default  DashboardLikeCard;
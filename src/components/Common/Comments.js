import React from 'react'
import { useParams } from 'react-router-dom'
import Avatar from 'components/Common/Avatar'
import StarHalf from 'assets/icons/StarHalf.jsx'
import Titles from 'components/Common/Titles'
import { formatCreationDate, formatDate } from 'utils/date'
import StarRatingStatic from '../RatingStarStatic'

//useQuery
import { useQuery } from 'react-query'

const classes = {
  container:
    'flex font-primary w-full p-2  min-h-content bg-white rounded-3xl drop-shadow-testimonialShadow my-8',
  maincon: 'w-fit sm:w-fit md:w-fit',
  avatarcon: ' rounded-full  ',
  detailscon: 'w-1/2 sm:w-1/2 xl:w-1/2',
  title: '',
  qualificationcon: 'flex w-fit',
  number: 'text-lg',
  text: 'pr-2 pb-2 text-xl break-all',
  staricon: 'ml-1 mt-1',
}

function Comments({ avatarImg, username, currentDate, stars, comment }) {
  const dateReview = formatDate(currentDate)
  const creationDate = formatCreationDate(currentDate)

  return (
    <div className={classes.container}>
      <div className={classes.maincon}>
        <Avatar width="38" height="38" avatarImg={avatarImg} />
      </div>

      <div className=" w-full">
        <div className="flex flex-col">
          <div className={classes.detailscon}>
            <h3 className="font-bold mt-3">{username}</h3>
            <p className="text-xs my-1 text-gray-400">{`${creationDate} (${dateReview})`}</p>
          </div>

          <div className={classes.qualificationcon}>
            <p className={classes.number}>{stars}</p>
            <StarRatingStatic
              width="18"
              height="18"
              className={classes.staricon}
              ratingValue={stars}
            />
          </div>
          <p className={classes.text}>{comment}</p>
        </div>
      </div>
    </div>
  )
}

export default Comments

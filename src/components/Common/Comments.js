import React from "react";
import { useParams } from "react-router-dom";
import Avatar from "components/Common/Avatar";
import StarHalf from "assets/icons/StarHalf.jsx";
import Titles from "components/Common/Titles";
import { formatCreationDate, formatDate } from "utils/date";
import StarRatingStatic from "../RatingStarStatic";

//useQuery
import { useQuery } from "react-query";

const classes = {
  container:
    "  flex font-primary w-full pb-4 h-commentsH bg-white rounded-3xl drop-shadow-testimonialShadow mt-20 overflow-hidden phone:h-auto",
  maincon: "w-fit sm:w-fit md:w-fit  p-3 ",
  avatarcon: " rounded-full  ",
  detailscon: "w-1/2 sm:w-1/2 xl:w-1/2 h-14",
  title: "",
  qualificationcon: "flex w-fit h-14 mx-5 ml-auto",
  number: "text-xs text-left mt-3  mx-2",
  text: "py-2 text-xs  sm:w-full xl:w-full ",
  staricon: "mt-4 ",
};

function Comments({ avatarImg, username, currentDate, stars, comment }) {
  const dateReview = formatDate(currentDate);

  return (
    <div className={classes.container}>
      <div className={classes.maincon}>
        <Avatar width='38' height='38' avatarImg={avatarImg} />
      </div>
      <div className=' w-full'>
        <div className='flex'>
          <div className={classes.detailscon}>
            <h3 className='font-bold mt-3'>{username}</h3>
            <p className='text-xs text-gray-400'>{dateReview}</p>
          </div>
          <div className={classes.qualificationcon}>
            <p className={classes.number}>{stars}</p>
            <StarRatingStatic
              width='10'
              height='10'
              className={classes.staricon}
              ratingValue={stars}
            />
          </div>
        </div>
        <div className='flex-col'>
          <p className={classes.text}>{comment}</p>
        </div>
      </div>
    </div>
  );

  /* return (
    <div className={classes.container}>
      <div className={classes.maincon}>
        <Avatar width='38' height='38' avatarImg={avatarImg} />
      </div>
      <div className={classes.detailscon}>
        <h3 className='font-bold mt-3'>{username}</h3>
        <p className='text-xs text-gray-400'>{dateReview}</p>
      </div>
      <div className={classes.qualificationcon}>
        <StarRatingStatic
          width='10'
          height='10'
          className={classes.staricon}
          ratingValue={stars}
        />
        <p className={classes.number}>{stars}</p>
      </div>
        <p className={classes.text}>{comment}</p>
    </div>
  );*/
}

export default Comments;

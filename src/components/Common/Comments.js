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
  maincon: "w-1/2 sm:w-fit md:w-fit flex flex-row p-3 ",
  avatarcon: " rounded-full  ",
  detailscon: " w-1/2 sm:w-fit xl:w-fit border",
  title: "",
  qualificationcon: "",
  number: "text-xs text-left",
  text: "py-2 text-xs mt-3 m-1 xl:w-full",
};

function Comments({ avatarImg, username, currentDate, stars, comment }) {
  const dateReview = formatDate(currentDate);

  return (
    <div className={classes.container}>
      <div className={classes.maincon}>
        <Avatar width='38' height='38' avatarImg={avatarImg} />
      </div>
      <div className={classes.detailscon}>
        <h3 className='font-bold mb-1 mt-3'>{username}</h3>

        <div className={classes.qualificationcon}>
          <StarRatingStatic
            width='10'
            height='10'
            className={classes.staricon}
            ratingValue={stars}
          />
          <p className={classes.number}>{stars}</p>
        </div>
        <p className='text-xs mt-2'>{dateReview}</p>
      </div>
      <p className={classes.text}>{comment}</p>
    </div>
  );
}

export default Comments;

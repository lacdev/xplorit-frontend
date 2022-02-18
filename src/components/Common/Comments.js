import React from "react";
import { useParams } from "react-router-dom";
import Avatar from "components/Common/Avatar";
import StarHalf from "assets/icons/StarHalf.jsx";
import Titles from "components/Common/Titles";
import { formatCreationDate, formatDate } from "utils/date";

//useQuery
import { useQuery } from "react-query";

const classes = {
  container:
    "  flex font-primary w-auto pb-4 h-commentsH bg-white rounded-3xl drop-shadow-testimonialShadow mt-20 overflow-hidden phone:h-auto",
  maincon: "flex flex-row m-2 pt-1",
  avatarcon: "flex rounded-full p-2.5",
  detailscon: "flex flex-col mt-1  ",
  titleh3: "text-2xl fond-normal",
  qualificationcon: "flex m-auto justify-items-end",
  number: "m-auto text-xs mx-1",
  text: "my-3  font-base break-words mx-auto w-3/4",
};

function Comments({ avatarImg, username, currentDate, stars, comment }) {
  const dateReview = formatDate(currentDate);

  return (
    <div className={classes.container}>
      <div className={classes.maincon}>
        <Avatar width='38' height='38' avatarImg={avatarImg} />
      </div>
      <div className={classes.detailscon}>
        <h3 className='text-lg m-auto mt-2'>{username}</h3>
        <p className='text-left mt-1 mb-1 text-xs'>Fecha de Publicación</p>
        <div className={classes.qualificationcon}>
          <p className='text-xs text-left pt-1 mr-5'>{dateReview}</p>
          <StarHalf width='1.375rem' height='1.375rem' />
          <p className={classes.number}>{stars}</p>
        </div>
      </div>
      <p className={classes.text}>{comment}</p>
    </div>
  );
}

export default Comments;

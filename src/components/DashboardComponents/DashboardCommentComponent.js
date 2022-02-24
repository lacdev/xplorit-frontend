import React from "react";
import { Link } from "react-router-dom";
//Icons
import Trash from "assets/icons/Trash";
import StarRatingStatic from "../RatingStarStatic";

const classes = {
  commentcon: " m-auto flex w-fit mb-5 bg-white shadow-md rounded-md",
  avatarcon: "max-w-xs mr-5",
  avatarimg:
    "rounded-l-lg bg-contain sm:min-h-cardHeight sm:min-w-cardWidth sm:shrink-0",
  infocon: "w-full justify-start mt-5 content-center flex flex-wrap",
  user: "text-2xl font-bold w-80",
  iconcon: "my-auto  items-end mr-5 ",
  average: "text-md  text-center mt-1",
  text: "w-80 mt-1",
  staricon: "",
  deletcon: "mt-5",
};

function DashboardCommentComponent({
  images,
  name,
  comment,
  average,
  type,
  id,
}) {
  const cardLink = `/${type}/${id}`;
  return (
    <Link to={cardLink}>
      <div className={classes.commentcon}>
        <div className={classes.avatarcon}>
          <img className={classes.avatarimg} src={images} alt=''></img>
        </div>
        <div className=''>
          <div className={classes.infocon}>
            <h2 className={classes.user}>{name}</h2>
            <div className={classes.iconcon}>
              <StarRatingStatic
                width='28'
                height='28'
                className={classes.staricon}
                ratingValue={average}
              />
              <p className={classes.average}>{average}</p>
            </div>
          </div>
          <div className={classes.text}>
            <p>{comment}</p>
            <div className={classes.deletcon}></div>
            <p className={classes.icontext}></p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default DashboardCommentComponent;

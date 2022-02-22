import React from "react";
import StarHalf from "assets/icons/StarHalf.jsx";
import { Link } from "react-router-dom";
import Btncards from "./Btncards";
import { Labels } from "./Labels";
import StarRatingStatic from "../RatingStarStatic";

const classes = {
  container:
    "font-Poppins bg-white rounded-3xl mx-8 my-4 drop-shadow-md flex min-h-[470px] lg:min-h-[490px] flex-col max-h-[585px]",
  imgcont: "h-full w-full",
  img: "rounded-t-lg  w-full object-cover",
  contcontainer: "p-4",
  title: "text-lg font-bold py-2",
  qualicontainer: "flex flex-row w-fit",
  qualification: "text-md px-2 mt-1",
  wraplabel: "flex flex-wrap",
  // label:'bg-tagscolor text-sm px-2 p-1 mr-2 my-2 rounded-full',
  btncontainer: "py-4",
  btncard: "w-32 h-10",
  staricon: "",
};
function cards({ name, score, labels, images = [], id, typeofplace }) {
  const cardLink = `/${typeofplace}/${id}`;

  return (
    <div className={classes.container}>
      <div className={classes.imgcont}>
        <img className={classes.img} src={images[0]} alt='' />
      </div>

      <div className={classes.contcontainer}>
        <h4 className={classes.title}>{name}</h4>
        <div className={classes.qualicontainer}>
          <StarRatingStatic
            width='28'
            height='28'
            className={classes.staricon}
            ratingValue={score}
          />
          <p className={classes.qualification}>{score}</p>
        </div>

        <div className={classes.wraplabel}>
          {labels.map((label) => {
            return <Labels LabelText={`#${label}`} />;
          })}
        </div>

        <div className={classes.btncontainer}>
          <Link to={cardLink}>
            <Btncards className={classes.btncard} name='Visitar' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default cards;

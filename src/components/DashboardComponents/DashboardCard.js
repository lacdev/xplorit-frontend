import React from "react";
import { Labels } from "../Common/Labels";
//Icons
import StarHalf from "assets/icons/StarHalf";
import Edit from "assets/icons/Edit";
import Trash from "assets/icons/Trash";
import StarRatingStatic from "../RatingStarStatic";
import { Link } from "react-router-dom";

const classes = {
  parentcon:
    "m-auto flex w-fit mb-5 bg-white shadow-md rounded-md cursor-pointer",
  imgcon: "max-w-xs mr-5",
  img: "rounded-l-lg bg-contain sm:min-h-cardHeight sm:min-w-cardWidth sm:shrink-0",
  cardinfo: "w-full  justify-start mt-5 content-center flex flex-wrap",
  textcon: "w-fit",
  text: "text-2xl  font-bold   w-80 ",
  starcon: "my-auto  items-end mr-5",
  average: "text-md  text-center mt-1",
  parentcards: "flex flex-wrap",
  requestcon: "flex w-1/3 justify-evenly mt-5",
  editadjust: "inline-flex w-full justify-center",
  editadjustcon: "flex-col mr-2",
  editcon: "flex justify-center ",
  deletjust: "inline-flex justify-center ",
  deletjustcon: "flex-col",
  deletcon: "flex justify-center",
  icontext: "text-md mt-1",
  star: "flex cursor-pointer ml-4 mt-2",
  staricon: "",
};
function DashboardCard({ cardData, type }) {
  console.log("cardData ", cardData);
  const cardLink = `/${type}/${cardData._id}`;
  return (
    <Link to={cardLink}>
      <div className={classes.parentcon}>
        <div className={classes.imgcon}>
          <img className={classes.img} src={cardData.images[0]} alt=''></img>
        </div>
        <div className=''>
          <div className={classes.cardinfo}>
            <div className={classes.textcon}>
              <h2 className={classes.text}>{cardData.name}</h2>
            </div>
            <div className={classes.starcon}>
              <StarRatingStatic
                width='28'
                height='28'
                className={classes.staricon}
                ratingValue={cardData.average}
              />
              <p className={classes.average}>{cardData.average}</p>
            </div>
          </div>
          <div className=''>
            <div className={classes.parentcards}>
              {cardData.tags &&
                cardData.tags.map((tag) => {
                  return <Labels LabelText={tag} />;
                })}
            </div>
            <div className={classes.requestcon}>
              <div className={classes.editadjust}>
                <div className={classes.editadjustcon}>
                  <div className={classes.editcon}>
                    <Edit className='' width='28' height='28' />
                  </div>
                  <p className={classes.icontext}>Editar</p>
                </div>
              </div>
              <div className={classes.deletjust}>
                <div className={classes.deletjustcon}>
                  <div className={classes.deletcon}>
                    <Trash />
                  </div>
                  <p className={classes.icontext}>Eliminar</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default DashboardCard;

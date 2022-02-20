import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { formatDate, formatCreationDate } from "utils/date";
//Icons & Images
import HeartFillOut from "assets/icons/HeartFillOut";
import HeartComplet from "assets/icons/HeartComplete";
import ThreePoints from "assets/icons/ThreePoints";

//Components
import Avatar from "components/Common/Avatar";
import { Labels } from "components/Common/Labels";
import Titles from "components/Common/Titles";
import StarRatingStatic from "./RatingStarStatic";

const classes = {
  parentcon: "font-primary overflow-x-hidden",
  divsectioncon: "w-full",
  section: "px-8",
  titleicon: "flex flex-col md:flex-row p-2 mt-4 justify-between",
  auxiconcon: "flex flex-row ",
  iconscon: "flex flex-col p-2 items-end ",
  hearticon: "mr-8",
  staricon: "",
  inforcon: "flex flex-col md:flex-row p-1 justify-between",
  avausercon: "flex ",
  usercon: "flex flex-col justify-center items-center",
  likequalcon: "flex flex-row text-center",
  //spanlike:'mr-14 text-center content-center phone:mr-2 phone:text-sm',
  //spanquali:'mr-2 text-center content-center phone:mr-10 phone:text-sm',
  liketext: "mr-9 mt-1",
  qualitext: "mr-22",
  datecon: "m-1 px-6",
  tagsdiv: "flex justify-start mt-4 ml-17",
  tags: "mr-8",
  decriptioncon: "mt-8 mb-8",
  text: "mt-8 break-words",
  // mapcon:'',
  ubicationcon: "flex flex-col my-6",
  divubications: "flex flex-row items-center",
  ubication: "ml-15 my-2",
  // commentcon:'',
  btn: "ml-9 py-2",
  created: "text-2xl",
};
function HeaderOnePlace({
  placeId,
  userId,
  tags,
  title,
  likes = 0,
  createdAt,
  updatedAt,
  average,
  username,
  avatar,
}) {
  const [useHeart, setUseHeart] = useState(false);
  const [usePostLike, setUsePostLike] = useState(likes);
  const { userState, setUserState } = useContext(AuthContext);
  const navigate = useNavigate();

  const currentDate = formatDate(updatedAt);
  const creationDate = formatCreationDate(createdAt);

  const handleClick = () => {
    if (useHeart === false && userState.loggedIn === true) {
      setUseHeart(true);
      setUsePostLike(usePostLike + 1);
      //saveLikeOnPlace(userId, placeId)
    } else if (useHeart === false && userState.loggedIn === false) {
      navigate("/login", { replace: true });
    } else {
      setUseHeart(false);
      setUsePostLike(usePostLike - 1);
      //deleteLikeOnPlace(userId, placeId)
    }
  };

  return (
    <section className='px-8'>
      <div className={classes.titleicon}>
        <Titles tag='h3' titleText={title || ""}></Titles>
        <div className={classes.iconscon}>
          <div onClick={handleClick} className='flex flex-row w-fit'>
            {useHeart === false ? (
              <HeartFillOut
                width='28'
                height='28'
                className={classes.hearticon}
              />
            ) : (
              <HeartComplet
                width='28'
                height='28'
                className={classes.hearticon}
              />
            )}
            <StarRatingStatic
              width='28'
              height='28'
              className={classes.staricon}
              ratingValue={average}
            />
            <ThreePoints width='40' height='28' className='ml-8' />
          </div>
          <div className={classes.likequalcon}>
            <div className={classes.liketext}>
              <p>{usePostLike}</p>
              <p>Me gusta</p>
            </div>
            <div className={classes.qualitext}>
              <p className='mt-1'>{average}</p>
              <p className=''>Calificación</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.inforcon}>
        <div className={classes.avausercon}>
          <Avatar avatarImg={avatar} />
          <div className={classes.usercon}>
            <p className={classes.created}>Agregado por {username}</p>
          </div>
        </div>
      </div>
      <div className={classes.datecon}>
        <p className='ml-12 text-xl'>Fecha de publicación</p>
        <p className='ml-12'>{`ultima actualizacion ${currentDate} (creado el ${creationDate})`}</p>
      </div>
      <div className={classes.tagsdiv}>
        {tags &&
          tags.map((tag, i) => {
            return (
              <Labels key={i} LabelText={tag} className={classes.tags}></Labels>
            );
          })}
      </div>
    </section>
  );
}

export default HeaderOnePlace;

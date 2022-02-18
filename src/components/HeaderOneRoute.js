import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatCreationDate, formatDate } from "utils/date";
//Icons & Images
import HeartFillOut from "assets/icons/HeartFillOut";
import HeartComplet from "assets/icons/HeartComplete";
import StarComplete from "assets/icons/StarComplete";
import ThreePoints from "assets/icons/ThreePoints";

//Components
import Avatar from "components/Common/Avatar";
import { Labels } from "components/Common/Labels";
import Titles from "components/Common/Titles";

//useQuery
import { useQuery } from "react-query";
import { getOwnerRoute } from "services/routes.services";

const classes = {
  parentcon: "font-primary overflow-x-hidden",
  divsectioncon: "w-full",
  section: "px-8",
  titleicon: "flex flex-col md:flex-row p-2 mt-4 justify-between",
  auxiconcon: "flex flex-row",
  iconscon: "flex flex-col p-2 items-end",
  hearticon: "mr-22 phone:mr-27",
  staricon: "mr-10 phone:mr-28 sphone:mr-16",
  inforcon: "flex flex-col md:flex-row p-1 justify-between",
  avausercon: "flex ",
  usercon: "flex flex-col justify-center items-center",
  likequalcon: "flex flex-row text-center",
  //spanlike:'mr-14 text-center content-center phone:mr-2 phone:text-sm',
  //spanquali:'mr-2 text-center content-center phone:mr-10 phone:text-sm',
  liketext: "mr-14",
  qualitext: "mr-10 sphone:mr-17",
  datecon: '"m-1 px-6',
  tagsdiv: "flex justify-start mt-4",
  tags: "mr-8",
  decriptioncon: "mt-8 mb-8",
  text: "mt-8 break-words",
  // mapcon:'',
  ubicationcon: "flex flex-col my-6",
  divubications: "flex flex-row items-center",
  ubication: "ml-15 my-2",
  // commentcon:'',
  btn: "ml-9 py-2",
  created: "text-2xl  ",
};
function HeaderOneRoute({ userId, tags, title, likes, createdAt, average }) {
  const [useHeart, setUseHeart] = useState(false);

  const currentDate = formatDate(createdAt);

  const getUser = useQuery(["getOwnerRoute", userId], getOwnerRoute);

  let userInfo = null;

  const { data: dataUser, status: statusUser } = getUser;

  if (statusUser === "loading") {
    return <p> Loading...</p>;
  }

  if (statusUser === "success") {
    userInfo = dataUser;
    console.log("asd: ", userInfo);
  }

  const handleClick = () => {
    if (useHeart === false) {
      setUseHeart(true);
    } else setUseHeart(false);
  };

  return (
    <section className='px-8'>
      <div className={classes.titleicon}>
        <Titles tag='h3' titleText={title || ""}></Titles>
        <div className={classes.iconscon}>
          <div onClick={handleClick} className='flex flex-row'>
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
            <StarComplete width='28' height='28' className={classes.staricon} />
            <ThreePoints width='40' height='28' />
          </div>
          <div className={classes.likequalcon}>
            <div className={classes.liketext}>
              <p>{likes}</p>
              <p>Me gusta</p>
            </div>
            <div className={classes.qualitext}>
              <p>{average}</p>
              <p>Calificación</p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.inforcon}>
        <div className={classes.avausercon}>
          <Avatar avatarImg={userInfo.avatar} />
          <div className={classes.usercon}>
            <p className={classes.created}>
              Agregado por<p className='font-bold'>{userInfo.username}</p>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.datecon}>
        <p className='ml-12 text-xl'>Fecha de publicación</p>
        <p className='ml-12'>{currentDate}</p>
      </div>
      <div className={classes.tagsdiv}>
        {tags &&
          tags.map((tag) => {
            return <Labels LabelText={tag} className={classes.tags}></Labels>;
          })}
      </div>
    </section>
  );
}

export default HeaderOneRoute;

import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { formatDate, formatCreationDate } from "utils/date";
import { useMutation, useQuery } from "react-query";

//Icons & Images
import HeartFillOut from 'assets/icons/HeartFillOut'
import HeartComplete from 'assets/icons/HeartComplete'
import ThreePoints from 'assets/icons/ThreePoints'
import StarRatingStatic from './RatingStarStatic'

//Components
import Avatar from 'components/Common/Avatar'
import { Labels } from 'components/Common/Labels'
import Titles from 'components/Common/Titles'

// const classes = {
//   parentcon: 'font-primary overflow-x-hidden',
//   divsectioncon: 'w-full',
//   section: 'px-8',
//   titleicon: 'flex flex-col md:flex-row p-2 mt-4 justify-between',
//   auxiconcon: 'flex flex-row ',
//   iconscon: 'flex flex-col p-2 mt-4 sm:mt-1',
//   hearticon: 'cursor-pointer',
//   staricon: '',
//   inforcon: 'flex',
//   avausercon: '',
//   usercon: 'flex flex-col',
//   created: 'text-2xl font-bold mb-2',
//   likequalcon: 'flex',
//   //spanlike:'mr-14 text-center content-center phone:mr-2 phone:text-sm',
//   //spanquali:'mr-2 text-center content-center phone:mr-10 phone:text-sm',
//   liketext: 'mr-9 mt-1',
//   qualitext: 'mr-22',
//   datecon: '',
//   tagsdiv: 'flex flex-wrap ',
//   tags: '',
//   decriptioncon: 'mt-8 mb-8',
//   text: 'mt-8 break-words',
//   // mapcon:'',
//   ubicationcon: 'flex flex-col my-6',
//   divubications: 'flex flex-row items-center',
//   ubication: 'ml-15 my-2',
//   // commentcon:'',
//   btn: 'ml-9 py-2',
// }

//Axios Functions
import {
  getRouteLikes,
  saveLikeOnRoute,
  deleteLikeOnRoute,
  getSingleUser,
} from "services/routes.services";

const classes = {
  parentcon: 'font-primary overflow-x-hidden',
  divsectioncon: 'w-full',
  section: 'px-8',
  titleicon: 'flex flex-col md:flex-row p-2 mt-4 justify-between',
  auxiconcon: 'flex flex-row',
  iconscon: 'flex flex-col p-2 mt-4 sm:mt-1',
  hearticon: 'cursor-pointer',
  staricon: '',
  inforcon: 'flex',
  avausercon: '',
  usercon: 'flex flex-col',
  created: 'text-2xl font-bold mb-2',
  likequalcon: 'flex',
  //spanlike:'mr-14 text-center content-center phone:mr-2 phone:text-sm',
  //spanquali:'mr-2 text-center content-center phone:mr-10 phone:text-sm',
  liketext: 'mr-9 mt-1',
  qualitext: 'mr-22',
  datecon: '',
  tagsdiv: 'flex flex-wrap',
  tags: '',
  decriptioncon: 'mt-8 mb-8',
  text: 'mt-8 break-words',
  // mapcon:'',
  ubicationcon: 'flex flex-col my-6',
  divubications: 'flex flex-row items-center',
  ubication: 'ml-15 my-2',
  // commentcon:'',
  btn: 'ml-9 py-2',
}
function HeaderOneRoute({
  routeId,
  tags,
  title,
  likes,
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
  const getLikes = useQuery(["getLikes", routeId], getRouteLikes);
  const getUser = useQuery(["user"], getSingleUser);

  const { data, status } = getLikes;
  const { data: dataUser, status: statusUser } = getUser;

  useEffect(() => {
    if (statusUser === "success" && status === "success") {
      console.log("user ", dataUser);
      console.log("data ", data);
      const user = getUser.data?._id;
      console.log("user ", user);
      const validate = data.some((like) => like.userId === user);
      if (validate) setUseHeart(true);
    } else return;
  }, [statusUser, status]);

  const addLike = useMutation(() => saveLikeOnRoute(routeId), {
    onSuccess: (like) => {
      setUseHeart(true);
      const newLikes = usePostLike + 1;
      setUsePostLike(newLikes);
    },
    onError: (like) => console.log("error al postear tu like"),
  });

  const removeLike = useMutation(() => deleteLikeOnRoute(routeId), {
    onSuccess: (like) => {
      setUseHeart(false);
      const newLikes = usePostLike - 1;
      setUsePostLike(newLikes);
    },

    onError: (like) => console.log("Hubo un problema al eliminar tu like"),
  });

  //Validations

  if (dataUser === []) {
    return <span> No se encontro usuario </span>;
  }

  if (data === []) {
    return 0;
  }

  const postLike = (e) => {
    e.preventDefault();
    if (useHeart === false) addLike.mutate();
    else removeLike.mutate();
  };

  /*const handleClick = () => {
    if (useHeart === false && userState.loggedIn === true) {
      setUseHeart(true)
    } else if (useHeart === false && userState.loggedIn === false) {
      navigate('/login', { replace: true })
    } else {
      setUseHeart(false)
    }
  };*/

  return (
    <section className="px-8">
      <div className={classes.titleicon}>
        <h1 className="font-extrabold text-6xl">{title || ''}</h1>

        <div className={classes.iconscon}>
          <div onClick={postLike} className='flex flex-row w-fit'>
          <div className="flex justify-items-center space-x-4">
            {useHeart === false ? (
              <div className="flex flex-col">
                <HeartFillOut
                  width="28"
                  height="28"
                  className={classes.hearticon}
                />
                <p className="mt-1 ml-2">{likes}</p>
              </div>
            ) : (
              <div className="flex flex-col">
                <HeartComplete
                  width="28"
                  height="28"
                  className={classes.hearticon}
                />
                <p className="mt-2">{likes}</p>
              </div>
            )}

            <div className="flex flex-col">
              <StarRatingStatic
                width="28"
                height="28"
                className={classes.staricon}
                ratingValue={average}
              />
              <p className="mt-2 ml-14">{average}</p>
            </div>

            <ThreePoints width="40" height="28" className="ml-8" />
          </div>

          {/* <div onClick={handleClick} className="flex flex-row w-fit"> */}
          {/* {useHeart === false ? (
              <div className="flex flex-col">
                <HeartFillOut
                  width="28"
                  height="28"
                  className={classes.hearticon}
                />
              </div>
            ) : (
              <div className="flex flex-col">
                <HeartComplete
                  width="28"
                  height="28"
                  className={classes.hearticon}
                />
              </div>
            )} */}
          {/* </div> */}
          {/* <div className={classes.likequalcon}>
            <div className={classes.liketext}></div>
            <div className={classes.qualitext}></div>
          </div> */}
        </div>
      </div>

      <div className={classes.inforcon}>
        <div className={classes.avausercon}>
          <Avatar avatarImg={avatar} />
        </div>

        <div className={classes.usercon}>
          <p className={classes.created}>{username}</p>

          <div className={classes.datecon}>
            <p>{`${creationDate} (creado ${currentDate})`}</p>
          </div>

          <div className={classes.tagsdiv}>
            {tags &&
              tags.map((tag, i) => {
                return (
                  <Labels
                    key={i}
                    LabelText={tag}
                    className={classes.tags}
                  ></Labels>
                )
              })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeaderOneRoute

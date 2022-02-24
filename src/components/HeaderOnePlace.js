import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "context/AuthContext";
import { formatDate, formatCreationDate } from "utils/date";
import { useQuery } from "react-query";
//Icons & Images
import HeartFillOut from "assets/icons/HeartFillOut";
import HeartComplet from "assets/icons/HeartComplete";
import ThreePoints from "assets/icons/ThreePoints";

//Components
import Avatar from "components/Common/Avatar";
import { Labels } from "components/Common/Labels";
import Titles from "components/Common/Titles";
import StarRatingStatic from "./RatingStarStatic";
import { saveLikeOnPlace, deleteLikeOnPlace } from "services/places.services";

//Axios functions
//import { saveLikeOnPlace } from "services/places.services";
//import { deleteLikeOnPlace } from "services/places.services";

const classes = {
  parentcon: "font-primary overflow-x-hidden",
  divsectioncon: "w-full",
  section: "px-8",
  titleicon: "flex flex-col md:flex-row p-2 mt-4 justify-between",
  auxiconcon: "flex flex-row ",
  iconscon: "flex flex-col p-2 mt-4 sm:mt-1",
  hearticon: "cursor-pointer",
  staricon: "",
  inforcon: "flex",
  avausercon: "",
  usercon: "flex flex-col",
  created: "text-2xl font-bold mb-2",
  likequalcon: "flex",
  //spanlike:'mr-14 text-center content-center phone:mr-2 phone:text-sm',
  //spanquali:'mr-2 text-center content-center phone:mr-10 phone:text-sm',
  liketext: "mr-9 mt-1",
  qualitext: "mr-22",
  datecon: "",
  tagsdiv: "flex flex-wrap ",
  tags: "",
  decriptioncon: "mt-8 mb-8",
  text: "mt-8 break-words",
  // mapcon:'',
  ubicationcon: "flex flex-col my-6",
  divubications: "flex flex-row items-center",
  ubication: "ml-15 my-2",
  // commentcon:'',
  btn: "ml-9 py-2",
};
function HeaderOnePlace({
  placeId,
  userId,
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
  //const [hasLike, setHasLike] = useState(false);
  const [usePostLike, setUsePostLike] = useState(likes);
  const { userState, setUserState } = useContext(AuthContext);
  const navigate = useNavigate();

  const currentDate = formatDate(createdAt);
  const creationDate = formatCreationDate(createdAt);
  const getLikes = useQuery(["getLikes", placeId], getPlaceLikes);
  const getUser = useQuery(["user"], getSingleUser);

  // const singlePlace = useQuery(["getSinglePlaceData", id], getSinglePlaceData);

  const addLike = useMutation(() => saveLikeOnPlace(placeId), {
    onSuccess: (like) => {
      setUseHeart(true);
      const newLikes = usePostLike + 1;
      setUsePostLike(newLikes);
    },
    onError: (like) => console.log("error al postear tu like"),
  });

  const removeLike = useMutation(() => deleteLikeOnPlace(placeId), {
    onSuccess: (like) => {
      setUseHeart(false);
      const newLikes = usePostLike - 1;
      setUsePostLike(newLikes);
    },

    onError: (like) => console.log("Hubo un problema al eliminar tu like"),
  });

  useEffect(() => {
    if (statusUser === "success" && status === "success") {
      const user = getUser.data?._id;

      const validate = data.some((like) => like.userId === user);
      if (validate) setUseHeart(true);
    } else return;
  }, [statusUser, status]);

  //Validations

  if (dataUser === []) {
    return <span> No se encontro usuario </span>;
  }

  if (data === []) {
    return 0;
  }

  const postLike = (e) => {
    e.preventDefault();
    if (userState.loggedIn === true && useHeart === false) addLike.mutate();
    else if (userState.loggedIn === true && useHeart === true)
      removeLike.mutate();
    else if (userState.loggedIn === false)
      navigate("/login", { replace: true });
  };

  return (
    <section className='px-8'>
      <div className={classes.titleicon}>
        <h1 className='font-extrabold text-6xl'>{title || ""}</h1>
        <div className={classes.iconscon}>
          <div className='flex justify-items-center space-x-4'>
            {useHeart === false ? (
              <div className='flex flex-col'>
                <HeartFillOut
                  onClick={handleClick}
                  width='28'
                  height='28'
                  className={classes.hearticon}
                />
                <p className='mt-2 ml-2'>{usePostLike}</p>
              </div>
            ) : (
              <div className='flex flex-col'>
                <HeartComplet
                  width='28'
                  height='28'
                  className={classes.hearticon}
                />
                <p className='mt-2'>{usePostLike}</p>
              </div>
            )}
            <div className='flex flex-col'>
              <StarRatingStatic
                width='28'
                height='28'
                className={classes.staricon}
                ratingValue={average}
              />
              <p className='mt-2 ml-14'>{average}</p>
            </div>

            <ThreePoints width='40' height='28' className='ml-8' />
          </div>
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
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderOnePlace;

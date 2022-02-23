import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from 'context/AuthContext'
import { formatDate, formatCreationDate } from 'utils/date'
import { useQuery } from 'react-query'
//Icons & Images
import HeartFillOut from 'assets/icons/HeartFillOut'
import HeartComplet from 'assets/icons/HeartComplete'
import ThreePoints from 'assets/icons/ThreePoints'

//Components
import Avatar from 'components/Common/Avatar'
import { Labels } from 'components/Common/Labels'
import Titles from 'components/Common/Titles'
import StarRatingStatic from './RatingStarStatic'
import { saveLikeOnPlace, deleteLikeOnPlace } from 'services/places.services'

//Axios functions
//import { saveLikeOnPlace } from "services/places.services";
//import { deleteLikeOnPlace } from "services/places.services";

const classes = {
  parentcon: 'font-primary overflow-x-hidden',
  divsectioncon: 'w-full',
  section: 'px-8',
  titleicon: 'flex flex-col md:flex-row p-2 mt-4 justify-between',
  auxiconcon: 'flex flex-row ',
  iconscon: 'flex flex-col p-2 mt-4 sm:mt-1',
  hearticon: '',
  staricon: '',
  inforcon: 'flex',
  avausercon: '',
  // flex
  usercon: 'flex flex-col',
  created: 'text-2xl font-bold mb-2',
  // flex flex-row text-center
  likequalcon: 'flex',
  //spanlike:'mr-14 text-center content-center phone:mr-2 phone:text-sm',
  //spanquali:'mr-2 text-center content-center phone:mr-10 phone:text-sm',
  liketext: 'mr-9 mt-1',
  qualitext: 'mr-22',
  datecon: '',
  tagsdiv: 'flex flex-wrap ',
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
  const [useHeart, setUseHeart] = useState(false)
  const [usePostLike, setUsePostLike] = useState(likes)
  const { userState, setUserState } = useContext(AuthContext)
  const navigate = useNavigate()

  // const singlePlace = useQuery(["getSinglePlaceData", id], getSinglePlaceData);

  const currentDate = formatDate(createdAt)
  const creationDate = formatCreationDate(createdAt)

  /*const handleClick = () => {
    if (useHeart === false && userState.loggedIn === true) {
      setUseHeart(true);
      // setUsePostLike(usePostLike + 1);
      saveLikeOnPlace(placeId)
    } else if (useHeart === false && userState.loggedIn === false) {
      navigate("/login", { replace: true });
    } else {
      setUseHeart(false);
      // setUsePostLike(usePostLike - 1);
      deleteLikeOnPlace(placeId)
    }
  };*/

  const handleClick = async () => {
    // await saveLikeOnPlace(placeId);
    console.log('esto trae placeId ', saveLikeOnPlace)
    await deleteLikeOnPlace(placeId)
    console.log('Like borrado correctamente')
  }

  return (
    <section className="px-8">
      <div className={classes.titleicon}>
        <h1 className="font-extrabold text-6xl">{title || ''}</h1>

        <div className={classes.iconscon}>
          <div className="flex justify-items-center space-x-4">
            {useHeart === false ? (
              <div className="flex flex-col">
                <HeartFillOut
                  onClick={handleClick}
                  width="28"
                  height="28"
                  className={classes.hearticon}
                />
                <p className="mt-2 ml-2">{usePostLike}</p>
              </div>
            ) : (
              <div className="flex flex-col">
                <HeartComplet
                  width="28"
                  height="28"
                  className={classes.hearticon}
                />
                <p className="mt-2">{usePostLike}</p>
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

export default HeaderOnePlace

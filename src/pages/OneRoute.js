import React, { useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { AuthContext } from "context/AuthContext";
import parse from "html-react-parser";
import Geocode from "react-geocode";

//Components
import Comments from "components/Common/Comments";
import ImageSlider from "components/Common/ImageSlider";
import Titles from "components/Common/Titles";
import Btncards from "components/Common/Btncards";
import HeaderOneRoute from "components/HeaderOneRoute";
import MapComponent from "components/MapComponent";
import StarRating from "components/RatingStar";

//useQuery & services
import { useQuery } from "react-query";
import { getSingleRouteData } from "services/routes.services";
import { getSingleReviewRoute } from "services/places.services";
import { saveReviewOnRoute } from "services/routes.services";
import PlaceAddress from "components/PlaceAddress";
import HeroLoader from "components/Common/HeroLoader";
Geocode.setApiKey(process.env.REACT_APP_GOOGLE_MAPS_API_KEY);

const classes = {
  parentcon: "font-primary overflow-x-hidden",
  titleicon: "flex flex-col md:flex-row p-2 mt-4 justify-between",
  divsectioncon: "w-full",
  section: "px-8",
  auxiconcon: "flex flex-row",
  iconscon: "flex flex-col p-2 items-end",
  hearticon: "mr-22 sphone:mr-27",
  staricon: "mr-10  sphone:mr-16",
  inforcon: "flex flex-col md:flex-row p-1 justify-between",
  avausercon: "flex",
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
  commentcon: "mb-20",
  btn: "ml-9 py-2 mt-5",
  textEditorHidden: "mt-10 hidden",
  textEditorShow: "mt-10 block",
  btnForm: " mt-1 text-right ml-auto py-2",
  textArea: "border border-current rounded-md w-full min-h-[200px]",
  star: "flex cursor-pointer ml-4 mt-2",
};

function OneRoute() {
  const { id } = useParams();
  const userId = "620c634ae13127a727d794e7";
  const [locationsData, setLocationsData] = useState([]);
  const [star, setStar] = useState(0);
  const { userState, setUserState } = useContext(AuthContext);
  const navigate = useNavigate();
  const [render, setRender] = useState([]);
  const [review, setReview] = useState({
    comment: "",
    stars: null,
    userId: "620c634ae13127a727d794e7",
  });
  const [textEditorView, setTextEditorView] = useState(
    classes.textEditorHidden
  );
  const [formattedAddress, setFormatedAddress] = useState([]);

  const singleRoute = useQuery(["getSingleRouteData", id], getSingleRouteData);
  const getReviews = useQuery(["getSingleReview", id], getSingleReviewRoute);

  const { data, status } = singleRoute;
  const { data: dataReviews, status: statusReviews } = getReviews;

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (data === undefined) {
      return;
    }
    const markerCoords = data?.location?.coordinates?.map((correctCoords) => {
      return { coords: { lat: correctCoords[1], lng: correctCoords[0] } };
    });
    const addressArrayPromises = markerCoords.map((event) => {
      return getPlaceAddress(
        event.coords.lat.toString(),
        event.coords.lng.toString()
      );
      // [event.coords.lat.toString(), event.coords.lng.toString()];
    });

    let addressesData = [];
    Promise.all(addressArrayPromises)
      .then((results) => {
        addressesData = results.map((res) => {
          return res.results[0].formatted_address;
        });
        setFormatedAddress(addressesData);
      })
      .catch((error) => {
        console.error(error);
      });

    setLocationsData(markerCoords);
  }, [data, status]);

  const getPlaceAddress = (lat, lng) => {
    return Geocode.fromLatLng(lat, lng);
  };

  const handleClick = () => {
    if (
      userState.loggedIn === true &&
      textEditorView === classes.textEditorHidden
    ) {
      setTextEditorView(classes.textEditorShow);
    } else if (userState.loggedIn === false) {
      navigate("/login", { replace: true });
    } else {
      setTextEditorView(classes.textEditorHidden);
    }
  };

  const saveReview = (e) => {
    const newReview = { ...review };
    newReview[e.target.id] = e.target.value;
    setReview(newReview);
    console.log(newReview);
  };

  const saveStar = (e) => {
    const newReview = { ...review };
    newReview[e.target.name] = e.target.value;
    setReview(newReview);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveReviewOnRoute(review, id, userId);
  };

  if (status === "loading") {
    return <HeroLoader />;
  }

  if (status === "success") {
    const userToFind = data.ownerId.toString();

    return (
      <div className={classes.parentcon}>
        <ImageSlider slides={data.images} />

        <div className='w-5/6 m-auto'>
          {data?.ownerId && (
            <HeaderOneRoute
              routeId={id}
              title={data.name}
              tags={data.tags}
              likes={data.likes}
              createdAt={data.createdAt}
              updatedAt={data.updatedAt}
              average={data.average}
              username={data.ownerId.username}
              avatar={data.ownerId.avatar}
            />
          )}
        </div>

        <div className='w-5/6 m-auto'>
          <section className='px-8'>
            <div className={classes.decriptioncon}>
              <Titles tag='h4' titleText='Descripción'></Titles>
              <p className={classes.text}>{parse(data.description)}</p>
            </div>
            <div className={classes.mapcon}>
              <MapComponent
                locationsData={locationsData}
                useMultipleLocations={true}
                customCenter={
                  locationsData[Math.floor(locationsData?.length / 2)]?.coords
                }
              />
            </div>
            {formattedAddress &&
              formattedAddress.map((location) => {
                return <PlaceAddress addressFromCoords={location} />;
              })}
            <Btncards
              onClick={handleClick}
              className={classes.btn}
              buttonText='Reseñar'
            />
            <div className={textEditorView}>
              <form>
                <textarea
                  placeholder=' describe tu experiencia...'
                  type='text'
                  id='comment'
                  className={classes.textArea}
                  onChange={(e) => saveReview(e)}
                  value={review.comment}
                ></textarea>
              </form>
              <p className='ml-10'> califica el lugar :</p>
              <div className='flex '>
                <StarRating
                  width='25'
                  height='25'
                  setRating={setStar}
                  className={classes.star}
                  onChange={(e) => saveStar(e)}
                  stars={star}
                />
                <button
                  className='bg-blue-600 ml-auto px-3 py-2 font-Poppins text-white rounded-full hover:bg-blue-700 drop-shadow-lg'
                  onClick={handleSubmit}
                >
                  Reseñar
                </button>
              </div>
            </div>
            <div className={classes.commentcon}>
              {dataReviews &&
                dataReviews.map((review) => {
                  return (
                    <Comments
                      avatarImg={review.userId.avatar}
                      username={review.userId.username}
                      currentDate={review.createdAt}
                      stars={review.stars}
                      comment={review.comment}
                    />
                  );
                })}
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default OneRoute;

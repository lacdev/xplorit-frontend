import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import parse from "html-react-parser";

//Icons & Images
import PinMap from "assets/icons/PinMap";

//Components
import Comments from "components/Common/Comments";
import ImageSlider from "components/Common/ImageSlider";
import Titles from "components/Common/Titles";
import Btncards from "components/Common/Btncards";
import MapComponent from "components/MapComponent";
import HeaderOnePlace from "components/HeaderOnePlace";
import StarRating from "components/RatingStar";
//useQuery
import { useQuery } from "react-query";
import { getSinglePlaceData } from "services/places.services";
import { getSingleReview } from "services/places.services";
import { saveReviewOnPlace } from "services/places.services";

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
  avausercon: "flex",
  usercon: "flex flex-col justify-center items-center",
  likequalcon: "flex flex-row text-center",
  //spanlike:'mr-14 text-center content-center phone:mr-2 phone:text-sm',
  //spanquali:'mr-2 text-center content-center phone:mr-10 phone:text-sm',
  liketext: "mr-14",
  qualitext: "mr-10 sphone:mr-17",
  datecon: "m-1 px-6",
  tagsdiv: "flex justify-start mt-4",
  tags: "mr-8",
  decriptioncon: "mt-8 mb-8",
  text: "mt-8 break-words",
  // mapcon:'',
  ubicationcon: "flex flex-col my-6",
  divubications: "flex flex-row items-center",
  ubication: "ml-15 my-2",
  commentcon: "mb-20",
  btn: "ml-9 py-2",
  textEditorHidden: "mt-10 hidden",
  textEditorShow: "mt-10 block",
  btnForm: " mt-1 text-right ml-auto py-2",
  textArea: "border border-current rounded-md w-full min-h-[200px]",
  star: "flex cursor-pointer ml-4 mt-",
};

function OnePlace() {
  const { id } = useParams();
  // const userId = "620c634ae13127a727d794e7";
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [star, setStar] = useState(0);
  const [review, setReview] = useState({
    comment: "",
    stars: null,
    userId: "",
  });

  const [textEditorView, setTextEditorView] = useState(
    classes.textEditorHidden
  );

  const singlePlace = useQuery(["getSinglePlaceData", id], getSinglePlaceData);
  const getReviews = useQuery(["getSingleReview", id], getSingleReview);

  const { data, status } = singlePlace;
  const { data: dataReviews, status: statusReviews } = getReviews;

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (data === undefined) {
      return;
    }

    if (statusReviews === "success") console.log("status ", dataReviews);

    const markerCoords = {
      lat: data.location.coordinates[1],
      lng: data.location.coordinates[0],
    };
    setSelectedLocation(markerCoords);
  }, [data, status]);

  const handleClick = () => {
    if (textEditorView === classes.textEditorHidden) {
      setTextEditorView(classes.textEditorShow);
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
    saveReviewOnPlace(review, id);
  };

  if (status === "loading") {
    return <p> Loading...</p>;
  }

  if (status === "success") {
    console.log("data ", data);
    const userToFind = data.ownerId.toString();

    return (
      <div className={classes.parentcon}>
        <ImageSlider slides={data.images} />

        <div className='w-5/6 m-auto'>
          {data?.ownerId && (
            <HeaderOnePlace
              placeId={id}
              userId={data.id}
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
              <MapComponent selectedLocation={selectedLocation} />
            </div>
            <div className={classes.ubicationcon}>
              <div className={classes.divubications}>
                <PinMap width='50' height='50' />
                <p>Dirección de la Ubicación</p>
              </div>
              <div className={classes.ubication}>
                Ciudad: {data.address.city}
              </div>
              <div className={classes.ubication}>
                Estado: {data.address.state}
              </div>
              <div className={classes.ubication}>
                Calle: {data.address.street}
              </div>
              <div className={classes.ubication}>
                C.P: {data.address.zipcode}
              </div>
            </div>
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
export default OnePlace;

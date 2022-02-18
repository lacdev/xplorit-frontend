import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import parse from "html-react-parser";

//Icons & Images

import Map from "assets/img/mapsample.png";
import PinMap from "assets/icons/PinMap";

//Components
import Comments from "components/Common/Comments";
import ImageSlider from "components/Common/ImageSlider";
import Titles from "components/Common/Titles";
import Btncards from "components/Common/Btncards";
import HeaderOneRoute from "components/HeaderOneRoute";

//useQuery
import { useQuery } from "react-query";
import { getSingleRouteData } from "services/routes.services";
import { getSingleReviewRoute } from "services/places.services";

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
  liketext: "mr-26 sphone:mr-33",
  qualitext: "mr-22 sphone:mr-28",
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
  btn: "ml-9 py-2",
};

function OneRoute() {
  const [textEditorView, setTextEditorView] = useState(
    classes.textEditorHidden
  );

  const { id } = useParams();

  const singleRoute = useQuery(["getSingleRouteData", id], getSingleRouteData);
  const getReviews = useQuery(["getSingleReview", id], getSingleReviewRoute);

  const { data, status } = singleRoute;
  const { data: dataReviews, status: statusReviews } = getReviews;

  const handleClick = () => {
    if (textEditorView === classes.textEditorHidden) {
      setTextEditorView(classes.textEditorShow);
    } else {
      setTextEditorView(classes.textEditorHidden);
    }
  };

  if (status === "loading") {
    return <p> Loading...</p>;
  }

  if (status === "success") {
    console.log("status ", data);
    const userToFind = data.ownerId.toString();

    return (
      <div className={classes.parentcon}>
        <ImageSlider slides={data.images} />

        <div className='w-5/6 m-auto'>
          {data?.ownerId && (
            <HeaderOneRoute
              userId={userToFind}
              title={data.name}
              tags={data.tags}
              likes={data.likes}
              createdAt={data.createdAt}
              average={data.average}
            />
          )}
        </div>

        <div className='w-5/6 m-auto'>
          <section className='px-8'>
            <div className={classes.decriptioncon}>
              <Titles tag='h4' titleText='Descripción'></Titles>
              <p className={classes.text}>{data.description}</p>
            </div>
            <div className={classes.mapcon}>
              <img src={Map} alt='ejemplo de mapa' />
            </div>
            <div className={classes.ubicationcon}>
              <div className={classes.divubications}>
                <PinMap width='50' height='50' />
                <p>Dirección de la Ubicación</p>
                <div className='clases.ubication'>Coordenadas: </div>
              </div>
              <div className={classes.divubications}>
                <PinMap width='50' height='50' />
                <p>Dirección de la Ubicación</p>
                <div className='clases.ubication'>Coordenadas: </div>
              </div>
              <div className={classes.divubications}>
                <PinMap width='50' height='50' />
                <p>Dirección de la Ubicación</p>
                <div className='clases.ubication'>Coordenadas: </div>
              </div>
              <div className={classes.divubications}>
                <PinMap width='50' height='50' />
                <p>Dirección de la Ubicación</p>
              </div>
            </div>
            <Btncards
              onClick={handleClick}
              className={classes.btn}
              buttonText='Reseñar'
            />
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

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
import HeaderOneRoute from "components/HeaderOneRoute";
import MapComponent from "components/MapComponent";
//useQuery & services
import { useQuery } from "react-query";
import { getSingleRouteData } from "services/routes.services";

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
  btn: "ml-9 py-2",
  textEditorHidden: "mt-10 hidden",
  textEditorShow: "mt-10 block",
  btnForm: "py-2 mt-3 text-right",
  textArea: "border border-current rounded-md w-full min-h-[200px]",
};

function OneRoute() {
  const [locationsData, setLocationsData] = useState([]);
  const [textEditorView, setTextEditorView] = useState(
    classes.textEditorHidden
  );

  const { id } = useParams();
  const singleRoute = useQuery(["getSingleRouteData", id], getSingleRouteData);
  const { data, isLoading, status } = singleRoute;

  useEffect(() => {
    if (status === "loading") {
      return;
    }

    if (data === undefined) {
      return;
    }
    const newMarkerCoords = [];
    const markerCoords = data.location.coordinates.map((correctCoords) => {
      return { coords: { lat: correctCoords[1], lng: correctCoords[0] } };
    });

    setLocationsData(markerCoords);
  }, [data, status]);
  console.log("This should be locations", locationsData);

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

        <div className="w-5/6 m-auto">
          {data?.ownerId && (
            <HeaderOneRoute
              userId={userToFind}
              title={data.name}
              tags={data.tags}
              likes={data.likes}
              createdAt={data.createdAt}
              updatedAt={data.updatedAt}
              average={data.average}
            />
          )}
        </div>

        <div className="w-5/6 m-auto">
          <section className="px-8">
            <div className={classes.decriptioncon}>
              <Titles tag="h4" titleText="Descripción"></Titles>
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
            <div className={classes.ubicationcon}>
              <div className={classes.divubications}>
                <PinMap width="50" height="50" />
                <p>Dirección de la Ubicación</p>
                <div className="clases.ubication">Coordenadas: </div>
              </div>
              <div className={classes.divubications}>
                <PinMap width="50" height="50" />
                <p>Dirección de la Ubicación</p>
                <div className="clases.ubication">Coordenadas: </div>
              </div>
              <div className={classes.divubications}>
                <PinMap width="50" height="50" />
                <p>Dirección de la Ubicación</p>
                <div className="clases.ubication">Coordenadas: </div>
              </div>
              <div className={classes.divubications}>
                <PinMap width="50" height="50" />
                <p>Dirección de la Ubicación</p>
              </div>
            </div>
            <Btncards
              onClick={handleClick}
              className={classes.btn}
              buttonText="Reseñar"
            />
            <div className={textEditorView}>
              <form>
                <textarea type="text" className={classes.textArea}></textarea>
              </form>
              <Btncards
                className={classes.btnForm}
                buttonText={"Enviar Reseña"}
              />
            </div>
            <div className={classes.commentcon}>
              <Comments />
              <Comments />
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default OneRoute;

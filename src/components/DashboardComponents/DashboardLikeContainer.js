import React from "react";

//UseQuery
import { useQuery } from "react-query";
import { getLikesCreatedByUser } from "services/user.services";
//Components
import DashboardLikeCard from "./DashboardLikeCard";
import BigTitle from "components/Common/BigTitle";

function DashboardLikeContainer() {
  // const id = "61ef68279262e2f167700caf";

  const getLikes = useQuery(["getLikes"], getLikesCreatedByUser);
  const { data, status, error } = getLikes;

  if (status === "loading") {
    return <span className='font-bold text-center'> Buscando Likes...</span>;
  }

  if (error === true) {
    console.log("un error ha ocurrido: ", error);
    return (
      <span className='font-bold text-center'>
        Ha ocurrido un error al realizar la peticion
      </span>
    );
  }

  if (status === "success") {
    console.log("data: ", data);
  }

  const renderCard = (like) => {
    console.log("like ", like);

    if (like?.placeId) {
      return (
        <DashboardLikeCard
          id={like?.placeId._id}
          name={like?.placeId.name}
          type={"place"}
          images={like?.placeId.images[0]}
          tags={like?.placeId.tags}
        />
      );
    } else
      return (
        <DashboardLikeCard
          id={like?.routeId._id}
          name={like?.routeId.name}
          type={"route"}
          images={like?.routeId.images[0]}
          tags={like?.routeId.tags}
        />
      );
  };

  return (
    <div>
      <div>
        <BigTitle bigTitleText='Likes' />
      </div>
      {data &&
        data.map((like) => {
          return renderCard(like);
        })}
    </div>
  );
}
export default DashboardLikeContainer;

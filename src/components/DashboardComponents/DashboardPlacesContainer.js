import React from "react";

//Usequery & services
import { useQuery } from "react-query";
import { getPlacesCreatedByUser } from "services/user.services";
import DashboardCard from "./DashboardCard";

const token = localStorage.getItem("token");

function DashboardPlacesContainer() {
  // const id = "61ff09c5f1b8eb106745942f";

  const getPlaces = useQuery(["getPlaces"], getPlacesCreatedByUser);

  const { data, status } = getPlaces;

  if (status === "loading") {
    return <span className='font-bold text-center'> Buscando Lugares ...</span>;
  }

  if (status === "error") {
    return (
      <span className='font-bold text-center'>
        No se encontraron lugares creados para este usuario
      </span>
    );
  }
  console.log("asd", data);
  return (
    <>
      {data &&
        data.map((place) => {
          return (
            <DashboardCard key={place._id} cardData={place} type={"place"} />
          );
        })}
    </>
  );
}
export default DashboardPlacesContainer;

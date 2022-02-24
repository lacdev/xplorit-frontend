import React from "react";

//Usequery & services
import { useQuery } from "react-query";
import { getPlacesCreatedByUser } from "services/user.services";
import DashboardCard from "./DashboardCard";
import BigTitle from "components/Common/BigTitle";
import Btncards from "components/Common/Btncards";
import { Link } from "react-router-dom";
import DashboardLoaderCards from "components/DashboardComponents/DashboardLoaderCards";

const token = localStorage.getItem("token");

function DashboardPlacesContainer() {
  // const id = "61ff09c5f1b8eb106745942f";

  const getPlaces = useQuery(["getPlaces"], getPlacesCreatedByUser, {
    retry: 0,
  });

  const { data, status } = getPlaces;

  if (status === "loading") {
    return (
      <span>
        <DashboardLoaderCards />
      </span>
    );
  }

  if (status === "error") {
    return (
      <span className='font-bold text-center'>
        Aun no has publicado lugares
      </span>
    );
  }
  console.log("asd", data);
  return (
    <>
      <div>
        <BigTitle bigTitleText='Lugares agregados' />
      </div>
      <div className='flex justify-end mb-1'>
        <Link to='/createplace'>
          <Btncards className='py-1' buttonText='+ Agregar lugar'></Btncards>
        </Link>
      </div>
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

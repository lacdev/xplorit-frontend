import React from "react";
//Usequery & services
import { useQuery } from "react-query";
import { getRoutesCreatedByUser } from "services/user.services";
import DashboardCard from "./DashboardCard";
import BigTitle from "components/Common/BigTitle";
import Btncards from "components/Common/Btncards";
import { Link } from "react-router-dom";
import DashboardLoaderCards from "components/DashboardComponents/DashboardLoaderCards";

function DashboardRoutesContainer() {
  const getRoutes = useQuery(["getRoutes"], getRoutesCreatedByUser, {
    retry: 0,
  });

  const { data, status } = getRoutes;

  if (status === "loading") {
    return (
      <span>
        {" "}
        <DashboardLoaderCards />{" "}
      </span>
    );
  }

  if (status === "error") {
    return (
      <span className='font-bold text-center'>Aun no has publicado rutas</span>
    );
  }

  return (
    <>
      <div>
        <BigTitle bigTitleText='Rutas creadas' />
      </div>
      <div className='flex justify-end mb-1'>
        <Link to='/createroute'>
          <Btncards className='py-1' buttonText='+ Crear ruta'></Btncards>
        </Link>
      </div>
      {data &&
        data.map((route) => {
          console.log("data: ", data);
          return (
            <DashboardCard key={route._id} cardData={route} type={"route"} />
          );
        })}
    </>
  );
}
export default DashboardRoutesContainer;

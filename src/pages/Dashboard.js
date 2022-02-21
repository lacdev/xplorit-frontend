<<<<<<< HEAD
import React from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
=======
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { AuthContext } from "context/AuthContext";

>>>>>>> develop
//Services
import { getUserProfilePic } from "services/user.services";
import BigTitle from "components/Common/BigTitle";
import DashboardBanner from "components/DashboardComponents/DashboardBanner";
import DashboardSideBar from "components/DashboardComponents/DashboardSideBar";
import DirectAccess from "components/DashboardComponents/DirectAccess";
<<<<<<< HEAD
=======
import { id } from "date-fns/locale";
>>>>>>> develop

const classes = {
  parentcon: "grid grid-cols-10",
  bannercon: "w-full col-span-10 bg-top",
  aside: "w-full h-full col-span-2 hidden md:block",
  maincon: "flex-col col-span-8 min-h-[100vh]",
  title: "flex justify-start",
  outletcon: "flex-col w-5/6 mx-auto my-4",
  accescon: "fixed bottom-0 min-w-full",
};

<<<<<<< HEAD
function Dashboard() {
  const id = "61ef68279262e2f167700caf";

  const getUser = useQuery(["getUserProfilePic", id], getUserProfilePic);
=======
const token = localStorage.getItem("token");

function Dashboard() {
  const id = '61ef68279262e2f167700caf'
  const {userState, setUserState} = useContext(AuthContext)
  const getUser = useQuery(["getUserProfilePic", id], getUserProfilePic);
  console.log(getUser);
>>>>>>> develop
  const { data, status } = getUser;

  return (
    <div className={classes.parentcon}>
      <div className={classes.bannercon}>
        {status === "loading" ? (
          <span> Loading</span>
        ) : (
          <DashboardBanner coverPhoto={data.coverPhoto} />
        )}
      </div>
      <div className={classes.aside}>
        {status === "loading" ? (
          <span> Loading</span>
        ) : (
          <DashboardSideBar avatar={data.avatar} username={data.username} />
        )}
      </div>
      <div className={classes.maincon}>
        <div>
<<<<<<< HEAD
          <BigTitle className={classes.title} bigTitleText='Rutas creadas' />
        </div>
        <div className={classes.outletcon}>
          {status === "loading" ? <span> Loading</span> : <Outlet />}
=======
          <BigTitle className={classes.title} bigTitleText="Rutas creadas" />
        </div>
        <div className={classes.outletcon}>
          {status === "loading" && userState.loggedIn === true 
          ? <span> Loading</span> : <Outlet />}
>>>>>>> develop
        </div>
      </div>
      <div className={classes.accescon}>
        <DirectAccess />
      </div>
    </div>
  );
}
export default Dashboard;

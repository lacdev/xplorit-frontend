import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "react-query";
import { AuthContext } from "context/AuthContext";

//Services
import { getUserProfilePic } from "services/user.services";
import BigTitle from "components/Common/BigTitle";
import DashboardBanner from "components/DashboardComponents/DashboardBanner";
import DashboardSideBar from "components/DashboardComponents/DashboardSideBar";
import DirectAccess from "components/DashboardComponents/DirectAccess";
import DashboardLoaderCards from "components/DashboardComponents/DashboardLoaderCards";
import { id } from "date-fns/locale";
import DashboardCoverLoader from "components/DashboardComponents/DashboardCoverLoader";
import DashboardSideLoader from "components/DashboardComponents/DashboardSideLoader";

const classes = {
  parentcon: "grid grid-cols-10",
  bannercon: "w-full col-span-10 bg-top",
  aside: "w-full h-full col-span-2 hidden md:block",
  maincon: "flex-col col-span-8 min-h-[100vh]",
  title: "flex justify-start",
  outletcon: "flex-col w-5/6 mx-auto my-4",
  accescon: "fixed bottom-0 min-w-full",
};

function Dashboard() {
  const { userState, setUserState } = useContext(AuthContext);
  const getUser = useQuery(["getUserProfilePic"], getUserProfilePic);
 // console.log(getUser);
  const { data, status } = getUser;

  return (
    <div className={classes.parentcon}>
      <div className={classes.bannercon}>
        {status === "loading" ? (
          <DashboardCoverLoader/>
        ) : (
          <DashboardBanner coverPhoto={data.coverPhoto} />
        )}
      </div>
      <div className={classes.aside}>
        {status === "loading" ? (
          <DashboardSideLoader/>
        ) : (
          <DashboardSideBar avatar={data.avatar} username={data.username} />
        )}
      </div>
      <div className={classes.maincon}>
        <div>
          <BigTitle className={classes.title} bigTitleText='Rutas creadas' />
        </div>
        <div className={classes.outletcon}>
          {status === "loading" && userState.loggedIn === true ? (
            <DashboardLoaderCards/>
          ) : (
            <Outlet />
          )}
        </div>
      </div>
      <div className={classes.accescon}>
        <DirectAccess />
      </div>
    </div>
  );
}
export default Dashboard;

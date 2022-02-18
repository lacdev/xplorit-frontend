import React from "react";
import { Link } from "react-router-dom";
//Components
import DashboardAvatar from "./DashboardAvatar";
import DashboardSideButton from "./DashboardSideButton";
//Icons
import Comments from "assets/icons/Comments";
import Heart from "assets/icons/Heart";
import LogOut from "assets/icons/LogOut";
import Lugares from "assets/icons/Lugares";
import Rutas from "assets/icons/Rutas";
//import Settings from 'assets/icons/Settings';

const classes = {
  bodycon: "w-full h-full bg-secondary",
  avatarcon: "w-full",
  sectionscon: "flex-col relative h-2/3 justify-start top-[200px]",
};

function DashboardSideBar({ avatar, username }) {
  return (
    <div className={classes.bodycon}>
      <div className={classes.avatarcon}>
        <DashboardAvatar avatar={avatar} username={username} />
      </div>
      <div className={classes.sectionscon}>
        <Link to="routes">
          <DashboardSideButton
            SvgIcon={Rutas}
            DashboardButtonText="Rutas creadas"
          />
        </Link>
        <Link to="places">
          <DashboardSideButton
            SvgIcon={Lugares}
            DashboardButtonText="Lugares agregados"
          />
        </Link>
        <Link to="comments">
          <DashboardSideButton
            SvgIcon={Comments}
            DashboardButtonText="Comentarios"
          />
        </Link>
        <Link to="likes">
          <DashboardSideButton SvgIcon={Heart} DashboardButtonText="Likes" />
        </Link>
        {
          //<Link to='edit'>
          //<DashboardSideButton  SvgIcon={Settings} DashboardButtonText="Editar perfil"/>
          //</Link>
        }
        <DashboardSideButton
          SvgIcon={LogOut}
          DashboardButtonText="Cerrar sesión"
        />
      </div>
    </div>
  );
}
export default DashboardSideBar;

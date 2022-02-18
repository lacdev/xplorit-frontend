import {
  ChatIcon,
  LocationMarkerIcon,
  HeartIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";
import RoutesIcon from "assets/icons/RoutesIcon";
import { Link } from "react-router-dom";

const classes = {
  parentcon:
    "max-w-screen-md bg-secondary block md:hidden rounded-full my-4 py-2 px-4",
  buttonscon: "flex justify-around",
  btnclass:
    "mx-2 p-1 rounded-full hover:bg-blue-700 active:bg-blue-700 focus:outline-none focus:ring focus:ring-tagscolor",
  placesicon: "stroke-white",
  commentsicon: "stroke-white",
  likesicon: "stroke-white",
  editicon: "stroke-white",
};
function DirectAccess() {
  return (
    <div className={classes.parentcon}>
      <div className={classes.buttonscon}>
        <Link to="routes">
          <button className={classes.btnclass}>
            <RoutesIcon width="30" height="30" />
          </button>
        </Link>
        <Link to="places">
          <button className={classes.btnclass}>
            <LocationMarkerIcon
              width="30"
              height="30"
              className={classes.placesicon}
            />
          </button>
        </Link>
        <Link to="comments">
          <button className={classes.btnclass}>
            <ChatIcon width="30" height="30" className={classes.commentsicon} />
          </button>
        </Link>
        <Link to="likes">
          <button className={classes.btnclass}>
            <HeartIcon width="30" height="30" className={classes.likesicon} />
          </button>
        </Link>
        <Link to="edit">
          <button className={classes.btnclass}>
            <PencilAltIcon
              width="30"
              height="30"
              className={classes.editicon}
            />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default DirectAccess;

import React from "react";
import image from "assets/img/image.jpg";

const classes = {
  img:'w-screen max-h-[30vh] object-cover object-center object-bottom ',
}
function DashboardBanner({ coverPhoto }) {
  return (
    <div className=''>
      <img
        className={classes.img}
        src={coverPhoto} alt='cover-dashboard'
      ></img>
    </div>
  );
}
export default DashboardBanner;
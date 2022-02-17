import React from "react";
import image from "assets/img/image.jpg";

export default function DashboardBanner({ coverPhoto }) {
  return (
    <div className=''>
      <img
        className='w-screen max-h-[30vh] object-cover object-bottom '
        src={coverPhoto}
      ></img>
    </div>
  );
}

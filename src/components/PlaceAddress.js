import React from "react";
import PinMap from "assets/icons/PinMap";

const classes = {
  body: "flex justify-between w-full my-3 px-2",
  pincon: "inline-flex",
};
function PlaceAddress({ addressFromCoords }) {
  return (
    <div className={classes.body}>
      <div className={classes.pincon}>
        <PinMap width="28" height="28" />
        <p>{addressFromCoords}</p>
      </div>
    </div>
  );
}
export default PlaceAddress;

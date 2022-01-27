import React from 'react';
import ImaAvatar from 'assets/img/avatar1.jpg'

const classes={
    container:'inline-block h-20 w-20 overflow-hidden rounded-full',
    img:'rounded-full'
}
function Avatar({width, height}) {
  return (
  <span className={classes.container} >
    <img src={ImaAvatar} className={classes.img} alt="*" ></img>
  </span>
   
   );
}

export default Avatar;

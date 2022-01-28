import React from 'react';
import ImaAvatar from 'assets/img/avatar1.jpg'

const classes={
    container:'flex bg-transparent p-6 justify-center rounded-full',
    img:'rounded-full place-content-center'
}
function Avatar({width, height}) {
  return (
  <div className={classes.container} >
    <img src={ImaAvatar} className={classes.img} alt="*" width={width} height={height}></img>
  </div>
   
   );
}

export default Avatar;

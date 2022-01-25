import React from 'react';
import ImaAvatar from 'assets/img/avatar1.jpg'

const classes={
    container:'flex bg-transparent p-6 justify-center ',
    img:'rounded rounded-full place-content-center w-24 h-24'
}
function Avatar() {
  return (
  <div className={classes.container} >
    <img src={ImaAvatar} className={classes.img} alt="*"></img>
  </div>
   
   );
}

export default Avatar;

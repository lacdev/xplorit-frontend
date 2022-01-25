import React from 'react';
import ImaAvatar from 'assets/img/avatar1.jpg'

const classes={
    container:'bg-transparent rounded rounded-full w-24 h-24',
}
function Avatar() {
  return (
  <div className={classes.container} >
    <img src={ImaAvatar} alt="*"></img>
  </div>
   
   );
}

export default Avatar;

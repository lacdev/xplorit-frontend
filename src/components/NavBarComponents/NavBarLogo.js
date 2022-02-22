import React from 'react';
import placeHolder from 'assets/img/placeHolder.jpg'

const classes = {
  body:'content-center',
  img:'h-[40px] w-[40px] mt-2' ,
}
function NavBarLogo() {
  return <div className={classes.body}>
      <img src={placeHolder} className={classes.img}alt='Logo-temporal'/>
  </div>;
}
export default NavBarLogo;
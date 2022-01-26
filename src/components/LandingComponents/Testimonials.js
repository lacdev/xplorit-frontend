import React from 'react';
import Avatar from 'components/Common/Avatar';
import StarComplete from 'assets/icons/starComplete'


const classes={
    container:'flex flex-col bg-white font-Poppins w-testimonialWidth h-testimonialHeight m-4 drop-shadow-testimonialShadow rounded rounded-2xl ',
    avatarcon:'flex place-content-center justify-center',
    name:' text-xl fond-bold text-black justify-center text-center',
    text:'text-base text-black break-all px-10 text-left mt-5',
    iconcon:'flex flex-row justify-center m-1 mt-10'
}
function Testimonials() {
  return (
  <div className={classes.container}>
      <Avatar width="6rem" height="6rem"></Avatar>
      <div>
          <h1 className={classes.name} >Juanita Rosales</h1>
      </div>
      <div>
          <p className={classes.text} >“ Lorem ipsum dolor sit amet, consectetur adipiscing elit ut all ”</p>
      </div>
      <div className={classes.iconcon} >
          <StarComplete width='30' height='30'/>
          <StarComplete width='30' height='30'/>
          <StarComplete width='30' height='30'/>
          <StarComplete width='30' height='30'/>
          <StarComplete width='30' height='30'/>
      </div>
  </div>
    );
}

export default Testimonials;

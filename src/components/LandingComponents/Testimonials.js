import React from 'react';
import Avatar from 'components/Common/Avatar';
import starComplete from 'assets/icons/starComplete';

const classes={
    container:'flex flex-col bg-white w-testimonialWidth h-testimonialHeight drop-shadow-testimonialShadow rounded rounded-2xl ',
    avatarcon:'flex place-content-center justify-center',
    name:'text-5xl fond-semibold text-black',
    text:'text-base text-black break-all px-5',
    iconcon:'flex flex-row justify-center m-1'
}
function Testimonials() {
  return (
  <div className={classes.container}>
      <div>
      <Avatar></Avatar>
      </div>
      <div>
          <h1 className={classes.name} >Juanita Rosales</h1>
      </div>
      <div>
          <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit ut all ”</p>
      </div>
      <div className={classes.iconcon} >
        <starComplete width="28" height="28"/>
      </div>
  </div>
    );
}

export default Testimonials;

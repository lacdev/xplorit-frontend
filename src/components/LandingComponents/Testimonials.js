import React from 'react';
import Avatar from 'components/Common/Avatar';
import StarComplete from 'assets/icons/starComplete'


const classes={
    container:'flex flex-col bg-white font-Poppins w-testimonialWidth h-testimonialHeight m-4 drop-shadow-testimonialShadow rounded rounded-2xl',
    avatarcon:'flex place-content-center justify-center rounded-full pt-12 pb-5',
    name:' text-xl fond-bold text-black justify-center text-center',
    text:'text-base text-black break-all px-10 text-left mt-5',
    iconcon:'flex flex-row justify-center m-1 mt-10',
    starclass:'mr-2.5'
}
function Testimonials() {
  return (
  <div className={classes.container}>
      <div className={classes.avatarcon} >
      <Avatar/>
      </div>
     
      <div>
          <h1 className={classes.name} >Juanita Rosales</h1>
      </div>
      <div>
          <p className={classes.text} >“ Lorem ipsum dolor sit amet, consectetur adipiscing elit ut all ”</p>
      </div>
      <div className={classes.iconcon} >
          <StarComplete width='30' height='30' className={classes.starclass}/>
          <StarComplete width='30' height='30' className={classes.starclass} />
          <StarComplete width='30' height='30' className={classes.starclass} />
          <StarComplete width='30' height='30' className={classes.starclass} />
          <StarComplete width='30' height='30' className={classes.starclass} />
      </div>
  </div>
    );
}

export default Testimonials;

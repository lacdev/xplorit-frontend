import React from 'react';
import Avatar from 'components/Common/Avatar';
import StarComplete from 'assets/icons/starComplete'


const classes={
    container:'flex-col bg-white font-Poppins h-testimonialHeight m-4 drop-shadow-testimonialShadow rounded rounded-2xl',
    avatarcon:'flex place-content-center justify-center rounded-full pt-12 pb-5',
    name:' text-xl fond-bold text-black justify-center text-center',
    text:'text-base text-black text-center px-auto text-left mt-5',
    iconcon:'flex flex-row justify-center m-1 mt-10 px-10',
    starclass:'mx-auto'
}
function Testimonials({testimonialText, testimonialName}) {
  return (
  <div className={classes.container}>
      <div className={classes.avatarcon} >
      <Avatar/>
      </div>
     
      <div>
          <h1 className={classes.name} >{testimonialName}</h1>
      </div>
      <div className='px-6'>
          <p className={classes.text} >{testimonialText}</p>
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

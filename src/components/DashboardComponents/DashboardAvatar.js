import React from 'react';
//Img || Component 
//import profilepic from 'assets/img/profilepic.jpg';
import ProfileUsername from './ProfileUsername';

const classes = {
  parentcon:' h-full w-full relative' ,
  imgcon:'flex-col absolute w-full top-[-100px]',
  img:'rounded-full w-[200px] border-solid border-8 m-auto  border-secondary' ,
}

function DashboardAvatar({avatar, username}) {
  return <div className={classes.parentcon }>
    <div className={classes.imgcon}>
      <img className={classes.img} src={avatar} alt='avatar-dashb'></img>
      <ProfileUsername username={username}/>
    </div>
  </div>;
}
export default  DashboardAvatar;
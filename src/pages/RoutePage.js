import React from 'react';
import Avatar from 'components/Common/Avatar';
import StartHalf from 'assets/icons/startHalf';
const classes={
  container:'w-commentsW h-commentsH bg-white rounded-3xl drop-shadow-testimonialShadow',
  maincon:'flex flex-col m-2',
}
export default function RoutePage() {
  return (
  <div className={classes.container} >
   <Avatar width="3rem" height="3rem"></Avatar>
    <div className={classes.maincon} >
      <h3>Lupita Florencia</h3>
    <p>Fecha de Publicación</p>
    <StartHalf width="1.375rem" height="1.375rem"></StartHalf>
    <p>4.8</p>
    </div> 
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum purus sit gravida ullamcorper lectus sapien, massa at odio. Cursus tortor sodales laoreet faucibus ullamcorper sit urna nullam porttitor. Sed at in viverra purus quis. Varius suspendisse volutpat habitasse hendrerit velit at in nisi, volutpat. Eu morbi in lacinia nunc, mauris vel sed nunc. Vitae fermentum cras senectus netus est velit porttitor imperdiet.</p>
  </div>
    
  );
}

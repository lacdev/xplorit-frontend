import {useState} from 'react';
import { SliderElements } from './SliderElements';
import ArrowLeft from 'assets/icons/ArrowLeft';
import ArrowRight from 'assets/icons/ArrowRight';

const classes ={
    secction:'flex relative w-full justify-center items-center',
    iconleft:'absolute inset-x-0 bottom-0 justify-end inline-flex items-start cursor-pointer h-9 w-12',
    iconright:'absolute bottom-0 justify-end inline-flex items-center cursor-pointer h-9 w-12',
    img:'cover min-w-full h-2/5',
}

function ImageSlider({slides}) {
   const [current, setCurrent] = useState(0)
    const length = slides.length
    
   const nextSlide =() => {
       setCurrent(current === length -1 ? 0 : current +1);
   };

   const prevSlide = () => {
       setCurrent(current === 0 ? length -1 : current -1);
   }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    };
    
    console.log(current);

    return (
  <section className={classes.secction} >
      <ArrowLeft  onClick={prevSlide} className={classes.iconleft} />
      <ArrowRight onClick={nextSlide} className={classes.iconright} />
      {SliderElements.map((slide , index) => {
       return (
           <div className={index === current ? 'active:' : 'slide'} key={index} >
             {index === current &&  (
                <img src={slide.image} alt="route images" className={classes.img} />
             )}   
           </div>
          
       )
      })}
  </section>
  );
}

export default ImageSlider;

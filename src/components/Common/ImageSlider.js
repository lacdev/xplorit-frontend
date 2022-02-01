import {useState} from 'react';
import { SliderElements } from './SliderElements';
import ArrowLeft from 'assets/icons/ArrowLeft';
import ArrowRight from 'assets/icons/ArrowRight';

const classes ={
    secction:'flex relative w-full justify-center items-center',
    iconleft:'absolute inset-x-0 bottom-0 left-[30rem] justify-end inline-flex items-start cursor-pointer h-9 w-12',
    iconright:'absolute bottom-0 left-[62.5rem] justify-end inline-flex items-center cursor-pointer h-9 w-12',
    img:'cover min-w-full h-2/5',
}

function ImageSlider({slides}) {
   const [current, setCurrent] = useState(0)
    const length = slides.length
    
   const nextSlide =() => {
    console.log(current)   
    setCurrent((prevState)=>{
        return (
         current === length -1 ? 0 : prevState+1   
        )
    });
   // setCurrent(current === length -1 ? 0 : current +1);
       console.log(current)
   };
    
   const prevSlide = () => {
       console.log(current)
       setCurrent((nextSlide)=>{
           return (
            current === 0 ? length -1 : nextSlide -1
           )
          
       });
       console.log(current)
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

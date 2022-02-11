import {useState, useEffect, useRef} from 'react';
//import { SliderElements } from './SliderElements';
import ArrowLeft from 'assets/icons/ArrowLeft';
import ArrowRight from 'assets/icons/ArrowRight';

const classes ={
    secction:'relative w-full h-full lg:w-screen lg:h-screen',
    iconleft:'absolute right-0 bottom-bottom7.5 left-80 justify-end inline-flex items-start cursor-pointer h-9 w-12',
    iconright:'absolute bottom-bottom7.5 left-2/3 justify-end inline-flex items-center cursor-pointer h-9 w-12',
    imgcont:'w-full h-screen',
    img:'object-cover object-center w-full h-full lg:w-screen lg:h-screen',
    animation:'delay-05ms ease-out animate-slides'
}

let count = 0;
function ImageSlider({slides}) {
   const [current, setCurrent] = useState(0)
    const length = slides.length
    console.log(slides)

    const slideRef=useRef();
    const removeAnimation = ()=> {
        slideRef.current.classList.remove(classes.animation)
    }

    useEffect(() => {
        slideRef.current.addEventListener ('animationend',removeAnimation )
        //startSlider();
       return () => {
        slideRef.current.removeEventListener('animationend')
       }
     
    }, []);
    
    const startSlider = () => {
        setInterval(()=> {
        nextSlide()
        },4000);
    };


    const nextSlide=() => {
     count = (count +1) % length;
    setCurrent(count);
    slideRef.current.classList.add(classes.animation)
    }
    const prevSlide=() => {
     count = (current + length -1) % length;
      setCurrent(count);
      slideRef.current.classList.add(classes.animation)
    }
    
/*   const nextSlide =() => {
    console.log(current); 
    setCurrent((prevState)=>{
        return (
         current === length -1 ? 0 : prevState+1   
        )
    });
       console.log(current)
   };
    
   const prevSlide = () => {
       console.log(current)
       setCurrent((nextState)=>{
           return (
            current === 0 ? length -1 : nextState -1
           )
          
       });
       console.log(current)
   }
*/
    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    };
    
   
    return (
  <section className={classes.secction} ref={slideRef}>
      <ArrowLeft  onClick={prevSlide} className={classes.iconleft} />
      <ArrowRight onClick={nextSlide} className={classes.iconright} />
      <img src={slides[current]} alt="route images" className={classes.img} /> 
    
  </section>
  );
}

export default ImageSlider;
 
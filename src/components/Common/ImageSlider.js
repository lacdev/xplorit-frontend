import {useState, useEffect, useRef} from 'react';
//import { SliderElements } from './SliderElements';
import ArrowLeft from 'assets/icons/ArrowLeft';
import ArrowRight from 'assets/icons/ArrowRight';

const classes ={
    secction:'flex relative w-full justify-center items-center',
    iconleft:'absolute inset-x-0 bottom-0 left-[30rem] justify-end inline-flex items-start cursor-pointer h-9 w-12',
    iconright:'absolute bottom-0 left-[62.5rem] justify-end inline-flex items-center cursor-pointer h-9 w-12',
    imgcont:'aspect-w-16 aspect-h-9',
    img:'cover',
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
        slideRef.current.addEventListener
        ('animationend',removeAnimation )
    //   startSlider();
     
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
    
    console.log(current);
    console.log(slideRef);
    return (
  <section className={classes.secction} ref={slideRef}>
      <ArrowLeft  onClick={prevSlide} className={classes.iconleft} />
      <ArrowRight onClick={nextSlide} className={classes.iconright} />

           <div className={classes.imgcont}>
                <img src={slides[current]} alt="route images" className={classes.img} /> 
           </div>
    
  </section>
  );
}

export default ImageSlider;
 
import { useState, useEffect, useRef } from 'react'
//import { SliderElements } from './SliderElements';
import ArrowLeft from 'assets/icons/ArrowLeft'
import ArrowRight from 'assets/icons/ArrowRight'

const classes = {
  section: 'relative w-full h-1/2',
  iconleft: 'absolute cursor-pointer bottom-10 left-20 sm:left-40 md:left-60',
  iconright:
    'absolute cursor-pointer bottom-10 right-20 sm:right-40 md:right-60',
  imgcont: 'w-full h-1/2',
  img: 'object-cover w-full h-full',
  animation: 'delay-05ms ease-out animate-slides',
}

let count = 0
function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const slideRef = useRef()
  const removeAnimation = () => {
    slideRef.current.classList.remove(classes.animation)
  }

  useEffect(() => {
    slideRef.current.addEventListener('animationend', removeAnimation)
    //startSlider();
    return () => {
      slideRef.current.removeEventListener('animationend')
    }
  }, [])

  const startSlider = () => {
    setInterval(() => {
      nextSlide()
    }, 4000)
  }

  const nextSlide = () => {
    count = (count + 1) % length
    setCurrent(count)
    slideRef.current.classList.add(classes.animation)
  }
  const prevSlide = () => {
    count = (current + length - 1) % length
    setCurrent(count)
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
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <section className={classes.section} ref={slideRef}>
      <ArrowLeft onClick={prevSlide} className={classes.iconleft} />
      <ArrowRight onClick={nextSlide} className={classes.iconright} />

      <div className={classes.imgcont}>
        <img src={slides[current]} alt="route images" className={classes.img} />
      </div>
    </section>
  )
}

export default ImageSlider

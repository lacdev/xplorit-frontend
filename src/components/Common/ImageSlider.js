import {useState, useEffect} from 'react';
import { SliderElements } from './SliderElements';
import ArrowLeft from 'assets/icons/ArrowLeft';
import ArrowRight from 'assets/icons/ArrowRight';


function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    
  
    return (
  <section className='flex relative h-full justify-center items-center' >
      <ArrowLeft width='53' height='46' /*onClick={prevSlide}*/ className='absolute' />
      <ArrowRight width='53' height='46' /*onClick={nextSlide}*/ />
      {SliderElements.map((slide , index) => {
       return (
           <img src={slide.image} alt="route images" className='cover min-w-full max-h-96'/>
       )
      })}
  </section>
  );
}

export default ImageSlider;

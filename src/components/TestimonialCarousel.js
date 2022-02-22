import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../customCss.css';
//Components
import Testimonials from './LandingComponents/Testimonials';

const classes ={
  container:'w-full mb-8',
}
function TestimonialCarousel() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return <div className={classes.container}>
        <Slider {...settings}>
          <Testimonials testimonialName="Lupita González" testimonialText="Gracias a Xplorit, encontré cosas que no esperaba cuando visité Pátzcuaro!" />
          <Testimonials testimonialName="Claudia Garza" testimonialText="Crear lugares está muy fácil. Se siente bien compartir experiencias"/>  
          <Testimonials testimonialName="Noemí Reyes" testimonialText="Me encanta la facilidad de poder seguir rutas con cosas increíbles"/>     
        </Slider>
  </div>
}
export default TestimonialCarousel;
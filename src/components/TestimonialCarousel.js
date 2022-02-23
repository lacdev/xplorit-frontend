import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../customCss.css'
//Components
import Testimonials from './LandingComponents/Testimonials'

//Images
import avatar1 from '../assets/img/avatar1.jpg'
import avatar2 from '../assets/img/avatar2.jpg'
import avatar3 from '../assets/img/avatar3.jpg'
import avatar4 from '../assets/img/avatar4.jpg'

//Avatar images from the persons.
const images = [avatar1, avatar2, avatar3, avatar4]

//Names of the hardcoded avatar persons.
const names = [
  'Lupita González',
  'Samuel Escandon',
  'Alejandro Lima',
  'Saul Garcia',
]

//Hardcoded comments from the persons.
const comments = [
  'Gracias a Xplorit, encontré cosas que no esperaba cuando visité Pátzcuaro!',
  'Crear lugares está muy fácil. Se siente bien compartir experiencias',
  'Me encanta la facilidad de poder seguir rutas con cosas increíbles',
  'Estan increibles las rutas, me ayudaron a decidir donde pasar mi fin de semana.',
]

const classes = {
  container: 'w-full mb-8',
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
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <div className={classes.container}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Testimonials
            testimonialName={names[index]}
            testimonialText={comments[index]}
            avatarImg={images[index]}
          />
        ))}
      </Slider>
    </div>
  )
}
export default TestimonialCarousel

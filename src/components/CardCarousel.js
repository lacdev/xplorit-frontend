import React from "react";
import Slider from "react-slick";
import Cards from "./Common/Cards";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../customCss.css";

export default function CardCarousel({cardsData}) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return <div className="w-full">
        <Slider {...settings}>
        {cardsData && cardsData.map((item)=> {
                return <Cards key={item._id} name= {item.name} labels={'Aventura'} score='3.8'/>
              })}           
        </Slider>
  </div>
}

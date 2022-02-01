import React, { Component } from "react";
import Slider from "react-slick";
import Cards from "./Common/Cards";

export default function CardCarousel() {
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
            breakpoint: 600,
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
            <div>
                <Cards/>
            </div>
            <div>
                <Cards/>
            </div>
            <div>
                <Cards/>
            </div>
            <div>
                <Cards/>
            </div>
        </Slider>
  </div>
}
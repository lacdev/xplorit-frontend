import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../customCss.css";
//Components
import Cards from "./Common/Cards";

const classes = {
  carruselcon: "w-full",
};
function CardCarousel({ cardsData, type }) {
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
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={classes.carruselcon}>
      <Slider {...settings}>
        {cardsData &&
          cardsData.map((item) => {
            console.log("item:", item);
            return (
              <Cards
                id={item._id}
                typeofplace={type}
                key={item._id}
                name={item.name}
                labels={item.tags}
                score={item.average}
                ownerId={item.ownerId}
                images={item?.images}
              />
            );
          })}
      </Slider>
    </div>
  );
}
export default CardCarousel;

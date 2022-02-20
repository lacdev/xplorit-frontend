import React, { useState } from "react";
import StarComplete from "assets/icons/StarComplete";

const StarRatingStatic = ({ width, height, className, ratingValue }) => {
  const integer = Math.round(ratingValue);

  return (
    <div className='flex '>
      {[...Array(5)].map((star, i) => {
        const rating = i;
        return (
          <label>
            <input
              type='radio'
              name='rating'
              className='hidden'
              value={integer}
            />
            <div className='flex '>
              <StarComplete
                width={width}
                height={height}
                className={className}
                fill={integer <= rating ? "#e4e5e9" : "#ffc107"}
              />
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default StarRatingStatic;

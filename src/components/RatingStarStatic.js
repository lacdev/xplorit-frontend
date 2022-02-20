import React, { useState } from "react";
import StarComplete from "assets/icons/StarComplete";

const StarRatingStatic = ({ width, height, className, ratingValue }) => {
  return (
    <div className='flex '>
      {[...Array(5)].map((star) => {
        return (
          <label>
            <input
              type='radio'
              name='rating'
              className='hidden'
              value={ratingValue}
            />
            <div className='flex '>
              <StarComplete
                width={width}
                height={height}
                className={className}
                fill={ratingValue >= 0 ? "#ffc107" : "#e4e5e9"}
              />
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default StarRatingStatic;

import React, { useState } from "react";
import StarComplete from "assets/icons/StarComplete";
import { set } from "date-fns";

const StarRating = ({ width, height, className }) => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className='flex mr-96 mt-0 ml-10'>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              type='radio'
              name='rating'
              className='hidden'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <StarComplete
              width={width}
              height={height}
              className={className}
              fill={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

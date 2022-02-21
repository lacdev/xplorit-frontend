import React, { useState } from "react";
import StarComplete from "assets/icons/StarComplete";

const StarRating = ({ width, height, className, onChange }) => {
  const [rating, setRating] = useState(0);

  return (
    <div className='flex '>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <label>
            <input
              key={i}
              type='radio'
              name='stars'
              className='hidden'
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onChange={(e) => onChange(e)}
            />
            <StarComplete
              width={width}
              height={height}
              className={className}
              fill={ratingValue <= rating ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default StarRating;

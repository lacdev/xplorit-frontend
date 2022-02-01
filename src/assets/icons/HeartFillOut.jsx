import React from 'react';

function HeartFillOut({width,height,className}) {
  return (
    <div>
      <svg
        width={width}
        height={height}
        className={`${className}`}
        viewBox="0 0 62 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.95 2.06104C9.14125 2.06104 2 8.76934 2 17.0441C2 32.0271 20.85 45.648 31 48.8162C41.15 45.648 60 32.0271 60 17.0441C60 8.76934 52.8588 2.06104 44.05 2.06104C38.656 2.06104 33.8855 4.57682 31 8.42746C29.5292 6.45951 27.5753 4.85345 25.3037 3.74525C23.0321 2.63705 20.5097 2.05934 17.95 2.06104Z"
          stroke="#FF3D00"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default HeartFillOut;

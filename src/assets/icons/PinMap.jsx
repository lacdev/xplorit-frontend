import React from 'react';

function PinMap({width,height,className}) {
  return (
    <svg
      width={width}
      height={height}
      className={`${className}`}
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M25.0008 4.16667C15.8112 4.16667 8.33415 11.6438 8.33415 20.8229C8.27374 34.25 24.3675 45.3833 25.0008 45.8333C25.0008 45.8333 41.7279 34.25 41.6675 20.8333C41.6675 11.6438 34.1904 4.16667 25.0008 4.16667ZM25.0008 29.1667C20.3967 29.1667 16.6675 25.4375 16.6675 20.8333C16.6675 16.2292 20.3967 12.5 25.0008 12.5C29.605 12.5 33.3342 16.2292 33.3342 20.8333C33.3342 25.4375 29.605 29.1667 25.0008 29.1667Z"
        fill="red"
      />
    </svg>
  );
}

export default PinMap;

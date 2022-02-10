import React from 'react';

function AddImageDashboard({width, height}) {
  return (
    <>
        <svg 
        width={width} 
        height={height} 
        viewBox="0 0 211 196" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >     
        <path d="M79.1257 106.167L105.501 73.5L131.876 110.25V98H167.042V40.8333C167.042 31.8255 159.156 24.5 149.459 24.5H35.1673C25.4701 24.5 17.584 31.8255 17.584 40.8333V138.833C17.584 147.841 25.4701 155.167 35.1673 155.167H105.501V122.5H43.959L70.334 89.8333L79.1257 106.167Z" fill="#B0B0B0"/>
        <path d="M167.042 114.333H149.459V138.833H123.084V155.167H149.459V179.667H167.042V155.167H193.417V138.833H167.042V114.333Z" fill="#B0B0B0"/>
      </svg>
    </>
  );
}

export default AddImageDashboard;

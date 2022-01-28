import React from 'react';


const classes={
    input:'form-control block w-full mx-4 py-1 px-4 mb-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
}
function Inputs({placeholderText}) {
  return (
  <div>
    <input type='text' className={classes.input} placeholder={placeholderText}></input>
  </div>
  );
}

export default Inputs;   

import React from 'react';


const classes={
    input:'form-control font-primary block w-full py-1 px-4 mb-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
}
function Inputs({placeholderText, value, onChange}) {
  return (
  <div>
    <input type='text' value={value} onChange={onChange}className={classes.input} placeholder={placeholderText}></input>
  </div>
  );
}

export default Inputs;   

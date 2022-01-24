import React from 'react';

const classes={
    textarea:'form-control block w-2/3 mx-4 p-2 mb-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
}
function TextTarea() {
  return (
  <div>
   <textarea className={classes.textarea} rows="4">
   </textarea>
  </div>
    );
}

export default TextTarea;

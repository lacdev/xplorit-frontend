import React from 'react';

export default function Titles({menu}) {
  return <div>
      <h3 className='my-4 mx-10 font-semibold text-[20px]'>
        <a href='#' >{menu}</a>
      </h3>
  </div>;
}

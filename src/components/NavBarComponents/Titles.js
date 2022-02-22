import React from 'react';

function Titles({menu, textColors}) {
  return <div>
      <h3 className={textColors}>
        <a href='#' >{menu}</a>
      </h3>
  </div>;
}
export default Titles;
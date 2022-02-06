import React from 'react';
import PropTypes from 'prop-types';


const classes={
    h1:'font-primary text-3xl mb-10 md:text-h1 font-bold text-white leading-relaxed',
    h2:'font-primary text-xl md:text-3xl font-semibold',
    h3:'font-primary text-5xl font-normal',
    h4:'font-primary text-4xl font-normal',
    h5:'font-primary text-3xl font-normal',
    }
function Titles({titleText="", tag=""}) {
    switch(tag) {
      case "h1": return  <h1 className={classes.h1}>{titleText}</h1>; 
      case "h2": return  <h2 className={classes.h2}>{titleText} </h2>; 
      case "h3": return <h3 className={classes.h3}> {titleText}</h3>; 
      case "h4": return <h4 className={classes.h4}>{titleText} </h4>;
      case "h5": return    <h5 className={classes.h5}>{titleText} </h5>; 
      default: return <p>{titleText}</p>;  

    }
   
   
}

/* -------------------------------------------------------------------------- */
/*                                      Define PropTypes                                    */
/* -------------------------------------------------------------------------- */
Titles.propTypes ={
  titleText:PropTypes.string.isRequired,
  tag:PropTypes.string,
  
}


export default Titles;

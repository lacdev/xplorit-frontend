import React from 'react';

const classes={
    h1:'text-h1 fond-bold text-white',
    h2:'text-5xl fond-semibold',
    h3:'text-5xl fond-normal',
    h4:'text-4xl fond-normal',
    h5:'text-3xl fond-normal',
    }
function Titles() {
    
  return (
    <>
    <h1 className={classes.h1}> </h1>
    <h2 className={classes.h2}> </h2>
    <h3 className={classes.h3}> </h3>
    <h4 className={classes.h4}> </h4>
    <h5 className={classes.h5}> </h5>

    </>
    );
}

export default Titles;

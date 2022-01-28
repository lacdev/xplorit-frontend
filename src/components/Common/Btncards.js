import React from 'react'

const classes={
    btn:'bg-secondary font-Poppins text-white rounded-full hover:bg-blue-400 px-10 drop-shadow-lg',
}
function Btncards({className,name, buttonText}) {
    return (
        <button className={`${classes.btn} ${className}`}>
         {name}   {buttonText}
        </button>
    )
}

export default Btncards

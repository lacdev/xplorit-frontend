import React from 'react'

function Btncards({className, buttonText}) {
    return (
        <button className={`bg-secondary font-Poppins text-white rounded-full hover:bg-blue-400 px-10 ${className}`}>
            {buttonText}
        </button>
    )
}

export default Btncards

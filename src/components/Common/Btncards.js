import React from 'react'

function Btncards({className, buttonText}) {
    return (
        <button className={`bg-secondary font-Poppins text-white rounded-full hover:bg-blue-400 w-flex h-auto p-2 ${className}`}>
            {buttonText}
        </button>
    )
}

export default Btncards

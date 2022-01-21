import React from 'react'

function Btncards({className}) {
    return (
        <button className={`bg-secondary font-Poppins text-white rounded-full hover:bg-blue-400 w-40 h-auto p-2 ${className}`}>
            Visitar
        </button>
    )
}

export default Btncards

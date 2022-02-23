import React from 'react'
// import Btncards from './Btncards'

const classes = {
  input:
    'form-control font-primary block w-full py-2 px-4 mb-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none',
}

function Inputs({ placeholderText, value, onChange, type = 'text' }) {
  return (
    <div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={classes.input}
        placeholder={placeholderText}
      ></input>
    </div>
  )
}

export default Inputs

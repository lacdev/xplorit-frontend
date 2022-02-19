import React from 'react'

function Btncards({
  className,
  name,
  buttonText,
  children,
  onClick = null,
  padding = 'px-6',
  color = 'bg-secondary',
}) {
  const classes = {
    btn: `${color} font-Poppins text-white rounded-full hover:bg-blue-700 ${padding} drop-shadow-lg`,
  }
  return (
    <button className={`${classes.btn} ${className}`} onClick={onClick}>
      {name} {buttonText} {children}
    </button>
  )
}

export default Btncards

import React from 'react'

function Btncards({
  className,
  name,
  buttonText,
  buttonType = '',
  children,
  onClick = null,
  padding = 'px-6',
  color = 'bg-secondary',
}) {
  const classes = {
    btn: `${color} font-Poppins text-white rounded-full hover:bg-blue-700 ${padding} drop-shadow-lg`,
  }
  if (buttonType == 'submit') {
    return (
      <input
        type="submit"
        value={buttonText}
        className={`${classes.btn} ${className}`}
      />
    )
  }

  return (
    <button className={`${classes.btn} ${className}`} onClick={onClick}>
      {name} {buttonText} {children}
    </button>
  )
}

export default Btncards

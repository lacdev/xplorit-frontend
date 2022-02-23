import React from 'react'

const classes = {
  container: 'inline-block h-20 w-20 overflow-hidden rounded-full',
  img: 'rounded-full object-cover w-12 h-12 m-3',
}
function Avatar({ width, height, avatarImg }) {
  return (
    <span className={classes.container}>
      <img src={avatarImg} className={classes.img} alt="*"></img>
    </span>
  )
}

export default Avatar

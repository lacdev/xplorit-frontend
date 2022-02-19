import React from 'react'
import PropTypes from 'prop-types'

const classes = {
  parentcon: 'flex w-full justify-around p-4',
  title: 'font-bold text-5xl m-6',
}

export default function BigTitle({ bigTitleText = '' }) {
  return (
    <div className={classes.parentcon}>
      <h1 className={classes.title}>{bigTitleText}</h1>
    </div>
  )
}

BigTitle.propTypes = {
  bigTitleText: PropTypes.string,
}

import React from 'react';
import PropTypes from 'prop-types'

export default function BigTitle({bigTitleText = ''}) {
  return <div className='flex w-full justify-around p-4' >
      <h1 className='font-bold text-3xl'>{bigTitleText}</h1>
  </div>;
}

BigTitle.propTypes= {
  bigTitleText: PropTypes.string,
}
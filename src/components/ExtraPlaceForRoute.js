import React from 'react'
import PinMap from 'assets/icons/PinMap'
import DeleteX from 'assets/icons/DeleteX'

export default function ExtraPlaceForRoute({addressFromMap}) {
  return (
    <div className='flex justify-between w-full mt-2 px-2'>
        <div className='inline-flex'>
            <PinMap width="28" height="28"/>
            <p>{addressFromMap}</p>
        </div>
        <DeleteX width="28" height="28"/>
    </div>
  )
}

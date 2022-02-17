import React from 'react'
import PinMap from 'assets/icons/PinMap'
import DeleteX from 'assets/icons/DeleteX'

export default function ExtraPlaceForRoute({addressFromMap, deleteButtonIndex, setLocationsData, locationsData}) {
    const removePlaceFromMap = (event) => {
        event.preventDefault()
        console.log("Primeras", locationsData)
        // const newLocationsData = locationsData.splice(event.currentTarget.id, 1)
        const newDataArray = [...locationsData]
        newDataArray.splice(event.currentTarget.id, 1)
        console.log("New Data Array", newDataArray)
        console.log("Locations despues de splice", locationsData)
        console.log("Aqui esta el evento", event.currentTarget.id)
        setLocationsData(newDataArray)
        console.log("Locations despues del seteo", locationsData)
      }
  return (
    <div className='flex justify-between w-full mt-2 px-2'>
        <div className='inline-flex'>
            <PinMap width="28" height="28"/>
            <p>{addressFromMap}</p>
        </div>
        <button id={deleteButtonIndex} onClick={removePlaceFromMap}>
            <DeleteX   width="28" height="28"/>
        </button>
    </div>
  )
}

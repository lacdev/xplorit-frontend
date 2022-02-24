import {useState}from 'react'
import Btncards from 'components/Common/Btncards';
function LimitCards({onClick=null}) {
  return (
      <div>
          <Btncards buttonText="Mostrar más" color="bg-black" onClick={onClick}></Btncards>
      </div>
    
  )
}

export default LimitCards
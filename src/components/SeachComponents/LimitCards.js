import {useState}from 'react'
import Btncards from 'components/Common/Btncards';
function LimitCards() {
    const [paginacion,setPaginacion] = useState(false)

    const listenClick = (e) => setPaginacion(e.target.value)
  // console.log("🚀 ~ file: LimitCards.js ~ line 7 ~ LimitCards ~ paginacion", paginacion)
    
  return (
      <div>
          <Btncards value={paginacion} buttonText="Mostrar más" color="bg-black" onChange={listenClick}></Btncards>
      </div>
    
  )
}

export default LimitCards
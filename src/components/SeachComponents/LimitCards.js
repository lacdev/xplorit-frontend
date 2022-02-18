import {useState}from 'react'
import Btncards from 'components/Common/Btncards';
function LimitCards() {
    const [paginacion,setPaginacion] = useState(0)

    const listenClick = () => setPaginacion(paginacion + 1);
    console.log("🚀 ~ file: LimitCards.js ~ line 7 ~ LimitCards ~ paginacion", paginacion)
    
  return (
      <div>
          <Btncards buttonText="Mostrar más" color="bg-black" onClick={listenClick}></Btncards>
      </div>
    
  )
}

export default LimitCards
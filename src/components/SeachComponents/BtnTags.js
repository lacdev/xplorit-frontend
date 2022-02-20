//import { useState } from 'react'
import Btncards from 'components/Common/Btncards'
const classes={
    btnclass: 'py-2 flex flex-row content-center',
}
function BtnTags({className, onTagClick=null}) {


 const listenClick = (info) => {
    onTagClick(info)
    
    }

 

  return (
    <>
        <Btncards buttonText="Aire Libre" padding="px-4" color="bg-quartiary" className={`mr-4 text-base min-w-110px ${classes.btnclass} ${className} `}
         onClick={()=>listenClick("aire libre")}></Btncards>
        <Btncards buttonText="Artesanias" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className} `} 
        onClick={()=>listenClick("artesanias")}></Btncards>
        <Btncards buttonText="Comida" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className} `} 
        onClick={()=>listenClick("comida")}></Btncards>
        <Btncards buttonText="Cultural" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className}`} 
        onClick={()=>listenClick("cultural")}></Btncards>
        <Btncards buttonText="Entretenimiento" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className}`} 
        onClick={()=>listenClick("entretenimiento")}></Btncards>
        <Btncards buttonText="Familiar" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className}`} 
        onClick={()=>listenClick("familiar")}></Btncards>
        <Btncards buttonText="Playa" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className} `} 
        onClick={()=>listenClick("playa")}></Btncards>
    </>
  )
}

export default BtnTags
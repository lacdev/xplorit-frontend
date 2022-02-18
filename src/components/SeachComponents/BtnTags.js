import { useState } from 'react'
import Btncards from 'components/Common/Btncards'
const classes={
    btnclass: 'py-2 flex flex-row content-center',
}
function BtnTags({className}) {
 const [choice, setChoice] = useState(0)

 const listenClick = () => setChoice(choice + 1);
 console.log("🚀 ~ file: BtnTags.js ~ line 10 ~ BtnTags ~ choice", choice)
 

  return (
    <>
        <Btncards buttonText="Aire Libre" padding="px-4" color="bg-quartiary" className={`mr-4 text-base min-w-110px ${classes.btnclass} ${className} `}
         onClick={listenClick}></Btncards>
        <Btncards buttonText="Artesanias" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className} `} 
        onClick={listenClick}></Btncards>
        <Btncards buttonText="Comida" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className} `} 
        onClick={listenClick}></Btncards>
        <Btncards buttonText="Cultural" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className}`} 
        onClick={listenClick}></Btncards>
        <Btncards buttonText="Entretenimiento" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className}`} 
        onClick={listenClick}></Btncards>
        <Btncards buttonText="Familiar" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className}`} 
        onClick={listenClick}></Btncards>
        <Btncards buttonText="Playa" padding="px-4" color="bg-quartiary" className={`mr-4 text-base ${classes.btnclass} ${className} `} 
        onClick={listenClick}></Btncards>
    </>
  )
}

export default BtnTags
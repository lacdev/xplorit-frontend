
import Select from 'react-select';

const classes = {
  selectorcon:'w-full',
}
function StateSelector({locationsData, renderMunicipios= false, onStateChange=null, selectOption}) {
  const formatStateData = () => {
      if(!locationsData)
    
      return []; 
      const statesArray = locationsData.map((state)=> {
          const dataObject= {
           label:state.estado,
           value:state.estado,
           municipios:state?.municipios || null,
          }
          return dataObject
      }) 
      return statesArray
  }
  const formatMunicipiosData = () => {
    if(!locationsData)
  
    return []; 
    const municipiosArray = locationsData.map((muni)=> {
       const dataObject= {
         label:muni,
        value:muni,
        
       }
       return dataObject
    }) 
     return municipiosArray
  }
  const locations = renderMunicipios === true ? formatMunicipiosData() :  formatStateData() 
  return (
  <div className={classes.selectorcon}> 
      <Select options={locations} onChange={onStateChange} value={selectOption}/>
      </div>
  )
}

export default StateSelector
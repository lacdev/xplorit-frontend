import React from 'react'
import Select from 'react-select';

const options = [
  { value:'likes', label: 'Más Popular' },
  { value:'average', label: 'Mejor Valorado' },
  { value:'createdAt', label: 'Reciente' },
 
];


function FiltroSelector({ filtros, onChange }) { 
   const handleChange = (selectedOptions) => {
     
        if (selectedOptions.length > 1) {
          return;
        }
        onChange(selectedOptions);
        
      };
    
  return (
    <Select value={filtros} onChange={handleChange} options={options} />
  )
}

export default FiltroSelector
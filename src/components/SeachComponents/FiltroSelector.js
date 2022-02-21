import React from 'react'
import Select from 'react-select';

const options = [
  { value:'likes', label: 'Más Popular' },
  { value:'average', label: 'Mejor Valorado' },
  { value:'chartAt', label: 'Reciente' },
 
];


function FiltroSelector({ filtros, setFiltrosValues }) {
  console.log('what is filtros?', filtros)
  console.log('what is setFiltrosValues?', setFiltrosValues)  
  const handleChange = (selectedOptions) => {
        if (selectedOptions.length === 1) {
          return;
        }
        setFiltrosValues(selectedOptions);
      };
  return (
    <Select value={filtros} onChange={handleChange} options={options} />
  )
}

export default FiltroSelector
import React from 'react';
import Select from 'react-select'
//Aire libre, familiar, aventura, comida, artesanías, cultural, entretenimiento, playa

const options = [
    {value:"Aire Libre", label:"Aire Libre"},
    {value:"Artesanías", label:"Artesanías"},
    {value:"Aventura", label:"Aventura"},
    {value:"Comida", label:"Comida"},
    {value:"Cultural", label:"Cultural"},
    {value:"Entretenimiento", label:"Entretenimiento"},
    {value:"Familiar", label:"Familiar"},
    {value:"Playa", label:"Playa"},
]

const CitySelector = ({tags, setTagValues}) => {
    
    const handleChange = (selectedOptions) => {
        if(selectedOptions.length > 1) {
            return
        }
        setTagValues(selectedOptions)
        }
    
        return (
            <Select
                isMulti
                value={tags}
                onChange={handleChange}
                options={options}
            />
        );
    }

export default CitySelector
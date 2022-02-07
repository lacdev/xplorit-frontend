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
    {value:"Playa", label:"Playa"},
]

const TagSelector = ({tags, setTagValues}) => {
    
    const handleChange = (selectedOptions) => {
        if(selectedOptions.length > 4) {
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

export default TagSelector
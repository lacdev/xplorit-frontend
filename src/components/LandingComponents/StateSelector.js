import React from 'react';
import Select from 'react-select'
//Aire libre, familiar, aventura, comida, artesanías, cultural, entretenimiento, playa

const options = [
    {value:"Aguascalientes", label:"Aguascalientes"},
    {value:"Baja California", label:"Baja California"},
    {value:"Baja California Sur", label:"Baja California Sur"},
    {value:"Campeche", label:"Campeche"},
    {value:"Coahuila", label:"Coahuila"},
    {value:"Colima", label:"Colima"},
    {value:"Chiapas", label:"Chiapas"},
    {value:"Chihuahua", label:"Chihuahua"},
    {value:"Durango", label:"Durango"},
    {value:"Ciudad de México", label:"Ciudad de México"},
    {value:"Guanajuato", label:"Guanajuato"},
    {value:"Guerrero", label:"Guerrero"},
    {value:"Hidalgo", label:"Hidalgo"},
    {value:"Jalisco", label:"Jalisco"},
    {value:"Estado de México", label:"Estado de México"},
    {value:"Chiapas", label:"Chiapas"},
    {value:"Chihuahua", label:"Chihuahua"},
    {value:"Durango", label:"Durango"},
]

const StateSelector = ({tags, setTagValues}) => {
    
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

export default StateSelector
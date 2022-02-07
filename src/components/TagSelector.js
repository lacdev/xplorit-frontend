import React from 'react';
import Select from 'react-select'

const options = [
    {value:"Javascript", label:"Javascript"},
    {value:"ReactJS", label:"ReactJS"},
    {value:"HTML", label:"HTML"},
    {value:"Sass", label:"Sass"},
    {value:"WebDev", label:"WebDev"},
    {value:"Programming", label:"Programming"},
    {value:"CSS", label:"CSS"},
    {value:"Node", label:"Node"},
    {value:"Java", label:"Java"},
    {value:"AWS", label:"AWS"},
    {value:"Phyton", label:"Phyton"},
    {value:"Linux", label:"Linux"},
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

export default Selector
import React from 'react';
import Select from 'react-select';
//Aire libre, familiar, aventura, comida, artesanías, cultural, entretenimiento, playa

const options = [
  { value: 'aire libre', label: 'Aire Libre' },
  { value: 'artesanias', label: 'Artesanías' },
  { value: 'aventura', label: 'Aventura' },
  { value: 'comida', label: 'Comida' },
  { value: 'cultural', label: 'Cultural' },
  { value: 'entretenimiento', label: 'Entretenimiento' },
  { value: 'familiar', label: 'Familiar' },
  { value: 'playa', label: 'Playa' },
];

const TagSelector = ({ tags, setTagValues }) => {
  const handleChange = (selectedOptions) => {
    if (selectedOptions.length > 4) {
      return;
    }
    setTagValues(selectedOptions);
  };

  return (
    <Select isMulti value={tags} onChange={handleChange} options={options} />
  );
};

export default TagSelector;

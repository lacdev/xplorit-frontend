// --------------------------------------
// Get Dependences
// --------------------------------------
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import PlacesAutoComplete, {
    geocodeByAddress,
    getLatLng,
} from 'react-places-autocomplete';
import MapSuggestions from './MapSuggestions';

// --------------------------------------
// Create Functional Component
// --------------------------------------
const SearchMapOnPage = ({
    containerName = "",
    // changePosition,
    localSearch,
    onChangeEvent,
    setSelectedLocationOnInputSearch,
}) => {
    const changePosition = true;
// ?--------------------------------------
// ? State
// ?--------------------------------------
const [address, setAddress] = useState("");
const [selectedAddress, setSelectedAddress] = useState("");

useEffect( () => {
    // geocodeByAddress(selectedAddress)
    //   .then(results => getLatLng(results[0]))
    //   .then(latLng => console.log('Success', latLng))
    //   .catch(error => console.error('Error', error));
    geocodeByAddress(selectedAddress).
    then(results => getLatLng(results[0]))
    .then((latLng) => {
            console.log(latLng)
            setSelectedLocationOnInputSearch(latLng);
    })
    .catch(error => console.error('Error', error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [selectedAddress]);
// ?--------------------------------------
// ? Events
// ?--------------------------------------
const handleChange = (value) => {
    setAddress(value);
}
// ?--------------------------------------
// ? Go To Selected Address from the options
// ?--------------------------------------
const handleSelect =  (selectedAddress) => {
    console.log(selectedAddress)
    setAddress(selectedAddress)
    setSelectedAddress(selectedAddress);
}

// const classPrefix = !containerName ? 'map' : containerName;
const onLocalChange = (event) => {
    const { value } = event.target;
    onChangeEvent(value.toLowerCase());
}
// ?--------------------------------------
// ? render Google Map Component or local
// ?--------------------------------------
    return (
        <div className='w-5/6 absolute left-[5px] top-[5px]'>
            <PlacesAutoComplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
                highlightFirstSuggestion={true}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <React.Fragment>
                            <div className={`input-container ${changePosition ? 'push-right' : ''}`}>
                                <div className=''>
                                    <input 
                                        {...getInputProps({
                                            placeholder: 'Busca aquí',
                                            className: 'form-control font-primary block w-full py-1 px-4 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                                    })} />
                                </div>
                            </div>
                        <MapSuggestions
                            suggestions={suggestions}
                            loading={loading}
                            getSuggestionItemProps={getSuggestionItemProps}
                        />
                    </React.Fragment>
                )}
            </PlacesAutoComplete>
        </div>
    )
}
// --------------------------------------
// Define PropTypes
// --------------------------------------
SearchMapOnPage.propTypes = {
    containerName: PropTypes.string,
    changePosition: PropTypes.bool,
    localSearch: PropTypes.bool,
    onChangeEven: PropTypes.func
};
// --------------------------------------
// Export Component
// --------------------------------------
export default SearchMapOnPage;
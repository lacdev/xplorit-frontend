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
const SearchMap = ({
    // changePosition,
    onChangeEvent,
    onAddressSelected
}) => {
    const changePosition = true;
// ?--------------------------------------
// ? State
// ?--------------------------------------
const [address, setAddress] = useState("");
const [selectedAddress, setSelectedAddress] = useState("");

useEffect( () => {
    geocodeByAddress(selectedAddress)
    .then((results) => {
        console.log('results', results)
        getLatLng(results[0])
    })
    .then((latLng) => {
            onAddressSelected(latLng, true);
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
    setAddress(selectedAddress)
    setSelectedAddress(selectedAddress);
}
// ?--------------------------------------
// ? Search Address on click button
// ?--------------------------------------
const SearchSelectedLocation = (selectedAddress) => {
    // setSelectedAddress(selectedAddress);
    geocodeByAddress(selectedAddress)
    .then(results => getLatLng(results[0]))
    .then((latLng) => {
            onAddressSelected(latLng, true);
    })
    .catch(error => console.error('Error', error));
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
        <div className={`search-container`}>
            <PlacesAutoComplete
                value={address}
                onChange={handleChange}
                onSelect={handleSelect}
                highlightFirstSuggestion={true}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <React.Fragment>
                            <div className={`input-container ${changePosition ? 'push-right' : ''}`}>
                                <div className="search">
                                    <input
                                        {...getInputProps({
                                            placeholder: 'searchMap',
                                            className: `search-input bottom-search`
                                    })} />
                                    <button
                                        className={`search-button`}
                                        onClick={SearchSelectedLocation.bind(this, address)}
                                    >
                                        Search
                                    </button>
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
SearchMap.propTypes = {
    containerName: PropTypes.string,
    changePosition: PropTypes.bool,
    localSearch: PropTypes.bool,
    onChangeEven: PropTypes.func
};
// --------------------------------------
// Export Component
// --------------------------------------
export default SearchMap;
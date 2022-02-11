// --------------------------------------
// Get Dependences
// --------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
// --------------------------------------
// Create Functional Component
// --------------------------------------
const MapSuggestions = ({loading, suggestions,getSuggestionItemProps }) => {
    const suggestionsStyle = {
        visibility : !loading && suggestions.length <= 0 ?'hidden' : 'visible',
    }
    return (
        <div className = 'bg-white w-full' style = {suggestionsStyle}>
            {loading && <span> ...Loading  </span>}
            {
                suggestions.map((suggestion) => {
                    return (
                        <div {...getSuggestionItemProps(suggestion)} className = 'border-black' key = {suggestion.description}>
                            {suggestion.description}
                        </div>
                    )
                })
            }
        </div>
    )
}
// --------------------------------------
// Define PropTypes
// --------------------------------------
MapSuggestions.propTypes = {
    loading : PropTypes.bool.isRequired,
    suggestions : PropTypes.array.isRequired,
    getSuggestionItemProps : PropTypes.any
};
// --------------------------------------
// Export Component
// --------------------------------------
export default MapSuggestions;









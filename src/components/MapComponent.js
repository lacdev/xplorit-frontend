import React, { useCallback, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import SearchMap from './SearchMap';
import SearchMapOnPage from './SearchMapOnPage';


const center = {
  lat: -3.745,
  lng: -38.52
};

const mapLibraries = ['places'];
const mapOptions = {
    disableDefaultUI: true,
    zoomControl: false
}

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;


function MapComponent({useOnePageSearch, selectedLocation = null, setSelectedLocationOnInputSearch, fullHeight=false}) {
    // ?--------------------------------------
    // ? Component setup
    // ?--------------------------------------
    const mapRef = useRef();
    const [currentUserLocation, setCurrentUserLocation] = useState(null);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: key,
        libraries: mapLibraries
    })
    const goToLocation = (coords)=>{
      mapRef.current.panTo(coords);
    }

    useEffect (()=>{
      if(selectedLocation == null){
        return
      }
      goToLocation(selectedLocation)
    },[selectedLocation])
    // ?--------------------------------------
    // ? Create a Ref to the map when is loaded
    // ? To keep track with Google Maps API
    // ?--------------------------------------
    const onMapLoad = useCallback((map) => {
      mapRef.current = map;
  }, []);

  // ?--------------------------------------
  // ? Clean Memory
  // ?--------------------------------------
  const onMapLoadUnmount = useCallback((map) => {
      mapRef.current = null;
  }, []);

    const mapIinitialPosition = selectedLocation !== null ? selectedLocation : center;
    console.log(mapIinitialPosition)


    const mapHeight = fullHeight ? '100vh' : '50vh';


    const containerStyle = {
      width: '100%',
      height: mapHeight,
    };
    

    if(!isLoaded) return null 
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onMapLoad}
        onUnmount={onMapLoadUnmount}
        center={center}
        zoom={15}
        options={mapOptions}
      >
        {useOnePageSearch ? <SearchMapOnPage setSelectedLocationOnInputSearch={setSelectedLocationOnInputSearch}/> : <SearchMap/>}
        {selectedLocation && <Marker position={selectedLocation}/>}
      </GoogleMap>
  )
}

export default MapComponent
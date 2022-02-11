import React, { useCallback, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import SearchMap from './SearchMap';
import SearchMapOnPage from './SearchMapOnPage';
import useCurrentLocation from 'hooks/UseCurrentLocation';


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

    // ? use custom hook, : es alias de la variable
    const { currentBrowserLocation, currentBrowserLocationError } = useCurrentLocation();

    useEffect(() => {

      if (!currentBrowserLocation || currentBrowserLocation === null)
          return;

      if (currentBrowserLocationError !== undefined)
          setCurrentUserLocation({ ...center })

      setCurrentUserLocation({ ...currentBrowserLocation });

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentBrowserLocation, currentBrowserLocationError])

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

    // ?--------------------------------------
    // ? Drag Event of the map
    // ?--------------------------------------
    const onMapDrag = (event) => {
      console.log("🚀 ~ file: CustomGoogleMap.js ~ line 81 ~ onMapDrag ~ event", event);
      if (!mapRef.current.center)
          return;

      const { center } = mapRef.current;


      // const lat = center.lat();
      // const lng = center.lng();
      const coords = {
          lat: center.lat(),
          lng: center.lng()
      }

      console.log("🚀 ~ file: CustomGoogleMap.js ~ line 82 ~ onMapDrag ~ coords", coords);
      setCurrentUserLocation({ ...coords })
      // setCurrentUserLocation({ lat: coords.lat, lng : coords.lng })
    }

    // ?--------------------------------------
    // ? Click Event on all markers
    // ?--------------------------------------
    const onMarkerClick = (event) => {
      console.log("🚀 ~ file: CustomGoogleMap.js ~ line 101 ~ onMarkerClick ~ event", event);

      const { latLng } = event;

      const coords = {
          lat: latLng.lat(),
          lng: latLng.lng()
      }
      console.log("🚀 ~ file: CustomGoogleMap.js ~ line 109 ~ onMarkerClick ~ coords", coords);
    }


    const onMapClick = (event) => {

        const { latLng } = event;

        const coords = {
            lat: latLng.lat(),
            lng: latLng.lng()
        }
        console.log("🚀 ~ file: CustomGoogleMap.js ~ line 124 ~ onMapClick ~ coords", coords);

    }

    const mapIinitialPosition = selectedLocation !== null ? selectedLocation : center;
    console.log(mapIinitialPosition)


    const mapHeight = fullHeight ? '100vh' : '50vh';


    const containerStyle = {
      width: '100%',
      height: mapHeight,
    };
    //Define map center
    const centerLocation = currentUserLocation !== null ? currentUserLocation : center;

    if(!isLoaded) return null 
    return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        onLoad={onMapLoad}
        onUnmount={onMapLoadUnmount}
        center={center}
        zoom={15}
        options={mapOptions}
        onDragEnd={onMapDrag}
        onClick={onMapClick}
      >
        {useOnePageSearch ? <SearchMapOnPage setSelectedLocationOnInputSearch={setSelectedLocationOnInputSearch}/> : <SearchMap/>}
        {selectedLocation && <Marker position={selectedLocation}/>}
      </GoogleMap>
  )
}

export default MapComponent
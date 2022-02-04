// --------------------------------------
// Get Dependences
// --------------------------------------
import React, { useCallback, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, useLoadScript, Marker, Polyline } from '@react-google-maps/api';
import location_marker_featured from 'assets/img/location_marker.svg';
import useCurrentLocation from "hooks/UseCurrentLocation";
import './styles.css';
/**
* CustomGoogleMap Component
* 
* @component
* @example
* <CustomGoogleMap/>
*/

const mapStyles = {
    width: '100%',
    height: '90vh'
}

const center = {
    lat: -3.745,
    lng: -38.523
};


const mapLibraries = ['places'];

const mapOptions = {
    disableDefaultUI: true,
    zoomControl: false
}


const CustomGoogleMap = (props) => {

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


    /* ==========================================================================
    ** Normal Map Set UP
    ** ========================================================================== */

    // ?--------------------------------------
    // ? Create Load Script for the map
    // ?--------------------------------------
    const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: key,
        libraries: mapLibraries
    })


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


    /* ==========================================================================
    ** Polylin (Route setup)
    ** ========================================================================== */

    const routesArray = [
        { lat: -3.605542116714663, lng: -38.965277470137934, start: true },
        { lat: -3.745, lng: -38.523 },
        { lat: -3.909427352122997, lng: -38.829243896484385 },
        { lat: -4.101547935807298, lng: -38.49149206974731, end: true }

    ]

    const lineOptions = {
        strokeColor: '#4377ff ',
        strokeOpacity: 0.8,
        strokeWeight: 5,
        fillColor: '#4377ff',
        fillOpacity: 0.35,
        clickable: false,
        draggable: true,
        editable: true,
        visible: true,
        radius: 30000,
        paths: [
            { lat: -3.605542116714663, lng: -38.965277470137934 },
            { lat: -3.745, lng: -38.523 },
            { lat: -3.909427352122997, lng: -38.829243896484385 },
            { lat: -4.101547935807298, lng: -38.49149206974731 }
        ],
        zIndex: 1
    }

    const onLineLoad = useCallback((lineContext) => {
        console.log("🚀 ~ file: CustomGoogleMap.js ~ line 120 ~ onLineLoad ~ lineContext", lineContext);

    }, [])


    /* ==========================================================================
    ** Render Component
    ** ========================================================================== */

    // Define center for the map
    const centerLocation = currentUserLocation !== null ? currentUserLocation : center;

    return (
        <div className='pageContainer'>

            <div className="sidebar"></div>

            <div className="content">

                <div className="filters"></div>



                {
                    !isLoaded ? <span> loading map </span>
                        : <GoogleMap
                            mapContainerStyle={mapStyles}
                            onLoad={onMapLoad}
                            center={centerLocation}
                            zoom={10}
                            options={mapOptions}
                            onDragEnd={onMapDrag}
                            onClick={onMapClick}
                        >

                            {
                                routesArray && routesArray.map((item, index) => {
                                    return (
                                        <Marker
                                            position={{ ...item }}
                                            title='custom marker'
                                            onClick={onMarkerClick}
                                            key={index}
                                            icon={item.start && location_marker_featured}
                                        />)
                                })
                            }



                            <Polyline
                                onLoad={onLineLoad}
                                path={routesArray}
                                options={lineOptions}
                                onClick={(event) => console.log(event)}
                            />

                        </GoogleMap>
                }



            </div>

        </div>
    )
}
// -------------------------------------- 
// Define PropTypes 
// -------------------------------------- 
CustomGoogleMap.propTypes = {
    props: PropTypes
};
// --------------------------------------
// Export Component
// --------------------------------------
export default CustomGoogleMap;
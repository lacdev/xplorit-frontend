/* ==========================================================================
** Custom Hook to handle User location
** 05/04/2021
** Alan Medina Silva
** ========================================================================== */


import { useState, useEffect } from "react";


const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

const useCurrentLocation = () => {
    // store location in state
    const [location, setLocation] = useState();
    // store error message in state
    const [error, setError] = useState();




    // Success handler for geolocation's `getCurrentPosition` method
    const handleSuccess = (pos) => {

        const { latitude, longitude } = pos.coords;

        // ? Dont Update the Location when the user changes Tab
        if (location !== undefined && location.lat !== undefined && location.lng !== undefined) {
            if ((location.lat === latitude) && (location.lng === longitude))
                return
        }


        setLocation({
            lat: latitude,
            lng: longitude,
        });
    };

    // Error handler for geolocation's `getCurrentPosition` method
    // and set the default location of Texas
    const handleError = (error) => {

        setError(error.message);
        setLocation({
            lat: -3.745,
            lng: -38.523
        });
    };

    useEffect(() => {
        const { geolocation } = navigator;

        // If the geolocation is not defined in the user 
        // browser we handle it as an error
        // and set the default location of Texas
        if (!geolocation) {
            setError("Geolocation is not supported.");
            setLocation({
                lat: -3.745,
                lng: -38.523
            });
            return;
        }

        // Call Geolocation API
        geolocation.getCurrentPosition(handleSuccess, handleError, options);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options]);

    return {
        currentBrowserLocation: location,
        currentBrowserLocationError: error
    };
};

export default useCurrentLocation;
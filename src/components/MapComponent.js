import React, { useCallback, useRef, useState, useEffect } from "react";
//import PropTypes from 'prop-types';
//Google React
import {
  GoogleMap,
  useLoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";
//Components
import SearchMap from "./SearchMap";
import SearchMapOnPage from "./SearchMapOnPage";
import useCurrentLocation from "hooks/UseCurrentLocation";

const center = {
  lat: 19.4326077,
  lng: -99.133208,
};

const mapLibraries = ["places"];
const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
};

const lineOptions = {
  strokeColor: "#4377ff ",
  strokeOpacity: 0.8,
  strokeWeight: 5,
  fillColor: "#4377ff",
  fillOpacity: 0.35,
  clickable: false,
  draggable: true,
  editable: true,
  visible: true,
  radius: 30000,
  paths: [],
  zIndex: 1,
};

const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function MapComponent({
  useOnePageSearch,
  selectedLocation = null,
  setSelectedLocationOnInputSearch,
  fullHeight = false,
  locationsData,
  useMultipleLocations = false,
  customCenter = null,
}) {
  // ?--------------------------------------
  // ? Component setup
  // ?--------------------------------------
  const mapRef = useRef();
  const [currentUserLocation, setCurrentUserLocation] = useState(null);

  // ? use custom hook, : es alias de la variable
  const { currentBrowserLocation, currentBrowserLocationError } =
    useCurrentLocation();

  useEffect(() => {
    if (!currentBrowserLocation || currentBrowserLocation === null) return;

    if (currentBrowserLocationError !== undefined)
      setCurrentUserLocation({ ...center });

    setCurrentUserLocation({ ...currentBrowserLocation });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBrowserLocation, currentBrowserLocationError]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: key,
    libraries: mapLibraries,
  });

  const goToLocation = (coords) => {
    mapRef?.current?.panTo(coords);
  };

  useEffect(() => {
    if (selectedLocation == null) {
      return;
    }
    goToLocation(selectedLocation);
  }, [selectedLocation]);
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
    if (!mapRef.current.center) return;

    const { center } = mapRef.current;

    const lat = center.lat();
    const lng = center.lng();
    const coords = {
      lat: center.lat(),
      lng: center.lng(),
    };
    setCurrentUserLocation({ ...coords });
    // setCurrentUserLocation({ lat: coords.lat, lng : coords.lng })
  };

  const onLineLoad = useCallback((lineContext) => {}, []);

  // ?--------------------------------------
  // ? Click Event on all markers
  // ?--------------------------------------
  const onMarkerClick = (event) => {
    const { latLng } = event;

    const coords = {
      lat: latLng.lat(),
      lng: latLng.lng(),
    };
  };

  const onMapClick = (event) => {
    const { latLng } = event;

    const coords = {
      lat: latLng.lat(),
      lng: latLng.lng(),
    };
  };

  const createPathData = () => {
    if (!locationsData) {
      return [];
    }
    const pathCoords = locationsData.map((location) => {
      return location.coords;
    });

    const newPathOptions = Object.assign({}, lineOptions);
    newPathOptions.paths = pathCoords;

    return { path: pathCoords, options: newPathOptions };
  };

  // const mapIinitialPosition =
  //   selectedLocation !== null ? selectedLocation : center;

  const mapHeight = fullHeight ? "100vh" : "50vh";

  const pathOptionsData = createPathData();

  const containerStyle = {
    width: "100%",
    height: mapHeight,
  };
  //Define map center
  const newCenter = () => {
    if (customCenter != null) {
      return customCenter;
    }
    if (selectedLocation != null) {
      return selectedLocation;
    }
    if (currentUserLocation != null) {
      return currentUserLocation;
    }
    return center;
  };

  const mapIinitialPosition = newCenter();
  // const centerLocation = currentUserLocation !== null ? currentUserLocation : center;

  if (!isLoaded) return null;
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      onLoad={onMapLoad}
      onUnmount={onMapLoadUnmount}
      center={mapIinitialPosition}
      zoom={13}
      options={mapOptions}
      onDragEnd={onMapDrag}
      onClick={onMapClick}
    >
      {useOnePageSearch ? (
        <SearchMapOnPage
          setSelectedLocationOnInputSearch={setSelectedLocationOnInputSearch}
        />
      ) : (
        <SearchMap />
      )}
      {selectedLocation && useMultipleLocations == false && (
        <Marker position={selectedLocation} />
      )}
      {locationsData &&
        useMultipleLocations == false &&
        locationsData.map((location) => {
          return <Marker position={location.coords} />;
        })}
      {locationsData &&
        useMultipleLocations == true &&
        locationsData.map((location) => {
          return <Marker position={location.coords} />;
        })}
      {locationsData && useMultipleLocations == true && (
        <Polyline
          onLoad={onLineLoad}
          path={pathOptionsData.path}
          options={pathOptionsData.options}
          onClick={(event) => console.log(event)}
        />
      )}
    </GoogleMap>
  );
}

export default MapComponent;

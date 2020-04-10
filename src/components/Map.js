import React from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';
import Markers from "./Markers";

require('dotenv').config();

const Map = ({ state, handleViewport, addMarker, selectMarker, closePopup, markerDragEnd }) => {
    const { latitude, longitude } = state.selectedMarker
    return (
        <ReactMapGL
            {...state.viewport}
            width="100%"
            height="50vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
            onViewportChange={handleViewport}
            onClick={addMarker}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
        >
            <Markers
                coordinates={state.coordinates}
                markerDragEnd={markerDragEnd}
                selectMarker={selectMarker}
            />
            {state.selectedMarker !== '' ? (
                <Popup
                    latitude={latitude}
                    longitude={longitude}
                    onClose={closePopup}
                >
                    <p>Lat: {latitude}<br />Lng: {longitude}</p>
                </Popup>
            ) : null}

        </ReactMapGL>
    );
}

export default Map;
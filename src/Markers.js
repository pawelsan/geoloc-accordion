import React from 'react';
import { Marker } from 'react-map-gl';

const Markers = ({ coordinates, markerDragEnd, selectMarker }) => {
    return (
        coordinates.map(marker =>
            <Marker
                key={marker.id}
                longitude={marker.longitude}
                latitude={marker.latitude}
                draggable
                onDragEnd={(e) => markerDragEnd(e, marker)}
            >
                <i
                    onDoubleClick={() => selectMarker(marker)}
                    className="fas fa-map-marker-alt fa-2x"
                ></i>
            </Marker>)
    );
}

export default Markers;
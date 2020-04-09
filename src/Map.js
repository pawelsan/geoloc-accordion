import React, { Component } from 'react';
// import mapboxgl from 'mapbox-gl';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';

require('dotenv').config();

class Map extends Component {

    state = {
        viewport: {
            longitude: 20.43871490,
            latitude: 52.0565846,
            zoom: 14,
            bearing: 0,
            pitch: 0
        },
        coordinates: [],
        selectedMarker: ''
    };

    loadMarkers() {
        return this.state.coordinates.map(marker =>
            <Marker
                key={marker.id}
                longitude={marker.longitude}
                latitude={marker.latitude}
                draggable
                onDragEnd={(e) => this.markerDragEnd(e, marker)}
            >
                <i
                    onDoubleClick={() => this.selectMarker(marker)}
                    className="fas fa-map-marker-alt fa-2x"
                ></i>
            </Marker>)
    }

    addMarker(e) {
        this.setState({
            coordinates: this.state.coordinates.concat({
                id: new Date().getTime(),
                longitude: e.lngLat[0],
                latitude: e.lngLat[1]
            })
        })
    }
    selectMarker(marker) {
        this.setState({
            selectedMarker: marker
        });
    }
    closePopup() {
        this.setState({
            selectedMarker: ''
        });
    };
    markerDragEnd(e, marker) {
        const index = this.state.coordinates.findIndex(coord => coord.id === marker.id);
        const temporaryArray = [...this.state.coordinates];
        temporaryArray[index].longitude = e.lngLat[0];
        temporaryArray[index].latitude = e.lngLat[1];
        this.setState({
            coordinates: temporaryArray
        });
    };

    render() {
        const { latitude, longitude } = this.state.selectedMarker
        return (
            <ReactMapGL
                {...this.state.viewport}
                width="100%"
                height="50vh"
                mapStyle="mapbox://styles/mapbox/streets-v11"
                onViewportChange={viewport => this.setState({ viewport })}
                onClick={(e) => this.addMarker(e)}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
            >
                {this.loadMarkers()}
                {this.state.selectedMarker !== '' ? (
                    <Popup
                        latitude={latitude}
                        longitude={longitude}
                        onClose={() => this.closePopup()}
                    >
                        <p>Lat: {latitude}<br />Lng: {longitude}</p>
                    </Popup>
                ) : null}

            </ReactMapGL>
        );
    }
}

export default Map;
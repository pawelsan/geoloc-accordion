import React, { Component } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';
import Markers from "./Markers";

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

    addMarker = (e) => {
        this.setState({
            coordinates: this.state.coordinates.concat({
                id: new Date().getTime(),
                longitude: e.lngLat[0],
                latitude: e.lngLat[1]
            })
        })

    }
    selectMarker = (marker) => {
        this.setState({
            selectedMarker: marker
        });
    }
    closePopup = () => {
        this.setState({
            selectedMarker: ''
        });
    };
    markerDragEnd = (e, marker) => {
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
                onClick={this.addMarker}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
            >
                <Markers
                    coordinates={this.state.coordinates}
                    markerDragEnd={this.markerDragEnd}
                    selectMarker={this.selectMarker}
                />
                {this.state.selectedMarker !== '' ? (
                    <Popup
                        latitude={latitude}
                        longitude={longitude}
                        onClose={this.closePopup}
                    >
                        <p>Lat: {latitude}<br />Lng: {longitude}</p>
                    </Popup>
                ) : null}

            </ReactMapGL>
        );
    }
}

export default Map;
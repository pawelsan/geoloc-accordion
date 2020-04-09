import React, { Component } from 'react';
// import mapboxgl from 'mapbox-gl';
import ReactMapGL from 'react-map-gl';

require('dotenv').config();

class Map extends Component {
    state = {
        viewport: {
            width: "50vw",
            height: "50vh",
            latitude: 42.430472,
            longitude: -123.334102,
            zoom: 16
        }
    };

    // componentDidMount() {
    //     const map = new mapboxgl.Map({
    //         container: this.mapContainer,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [this.state.lng, this.state.lat],
    //         zoom: this.state.zoom
    //     });

    //     map.on('move', () => {
    //         this.setState({
    //             lng: map.getCenter().lng.toFixed(4),
    //             lat: map.getCenter().lat.toFixed(4),
    //             zoom: map.getZoom().toFixed(2)
    //         });
    //     });

    // this.setState({
    //     map: new mapboxgl.Map({
    //         container: this.mapContainer,
    //         style: 'mapbox://styles/mapbox/streets-v11',
    //         center: [this.state.lng, this.state.lat],
    //         zoom: this.state.zoom
    //     })
    // });


    // componentDidUpdate() {
    //     this.state.map.resize();
    //     this.state.map.on('move', () => {
    //         this.setState({
    //             lng: this.state.map.getCenter().lng.toFixed(4),
    //             lat: this.state.map.getCenter().lat.toFixed(4),
    //             zoom: this.state.map.getZoom().toFixed(2)
    //         });
    //     });
    // }
    // }

    render() {
        return (
            <ReactMapGL
                {...this.state.viewport}
                mapStyle="mapbox://styles/mapbox/outdoors-v11"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
            >
            </ReactMapGL>

            // <div>
            //     <div className='sidebarStyle'>
            //         <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
            //     </div>
            //     <div ref={el => this.mapContainer = el} className='mapContainer' />
            // </div>
        );
    }
}

export default Map;
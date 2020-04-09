import React, { Component } from 'react';
// import mapboxgl from 'mapbox-gl';
import ReactMapGL, { Marker } from 'react-map-gl';

require('dotenv').config();

class Map extends Component {
    // state = {
    //     viewport: {
    //         width: "100vw",
    //         height: "100vh",
    //         latitude: 42.430472,
    //         longitude: -123.334102,
    //         zoom: 16
    //     }
    // };
    state = {
        viewport: {
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
            bearing: 0,
            pitch: 0
        },
        coordinates: []
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
    addMarker(e) {
        // this.setState({
        //     markers: this.state.markers.push({
        //         longitude: e.lngLat[0],
        //         latitude: e.lngLat[1]
        //     })
        // })
        this.setState({
            coordinates: this.state.coordinates.concat({
                longitude: e.lngLat[0],
                latitude: e.lngLat[1]
            })
        })
        console.log(this.state.coordinates)
    }

    render() {
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
                {this.state.coordinates.map(marker =>
                    <Marker
                        key={`${marker.longitude}${marker.latitude}`}
                        longitude={marker.longitude}
                        latitude={marker.latitude}
                    >
                        <i class="fas fa-map-marker-alt"></i>
                    </Marker>)}

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
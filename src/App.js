import React, { Component } from 'react';
import './App.css';
import { Container } from 'reactstrap';
import Accordion from './Accordion';

class App extends Component {
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

  handleViewport = (viewport) => {
    this.setState({ viewport })
  }

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
    return (
      <div className="App">
        <Container>
          <Accordion
            state={this.state}
            handleViewport={this.handleViewport}
            addMarker={this.addMarker}
            selectMarker={this.selectMarker}
            closePopup={this.closePopup}
            markerDragEnd={this.markerDragEnd}
          />
        </Container>
      </div>
    );
  }
}

export default App;

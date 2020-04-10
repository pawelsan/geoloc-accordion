import React, { Component } from 'react';
import './assets/css/App.css';
import { Container } from 'reactstrap';
import Accordion from './components/Accordion';

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
  };

  addMarker = (e) => {
    this.setState(prevState => ({
      coordinates: [...prevState.coordinates, {
        id: new Date().getTime(),
        longitude: e.lngLat[0],
        latitude: e.lngLat[1]
      }]
    }))
  };

  selectMarker = (marker) => {
    this.setState({
      selectedMarker: marker
    });
  };

  closePopup = () => {
    this.setState({
      selectedMarker: ''
    });
  };

  markerDragEnd = (e, id) => {
    const index = this.state.coordinates.findIndex(coord => coord.id === id);
    const temporaryArray = [...this.state.coordinates];
    temporaryArray[index].longitude = e.lngLat[0];
    temporaryArray[index].latitude = e.lngLat[1];
    this.setState({
      coordinates: temporaryArray
    });
  };

  handleDelete = (id) => {
    this.setState(prevState => ({
      coordinates: prevState.coordinates.filter(marker => marker.id !== id)
    }));
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
            handleDelete={this.handleDelete}
          />
        </Container>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '800px',
    height: '800px',
    marginLeft: '10px'
  };

class GoogleMap extends Component {
    
    
    render() {
        return (
            <div id="mapArea">
                <div>This is the map area</div>
                <Map
                    google={this.props.google}
                    zoom={10}
                    initialCenter={{ lat: 33.753746, lng: -84.386330}}
                    style={mapStyles}
                />
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyC1TkGK-WkLkfAESxrtmCHikwWZdMKygRc'
  })(GoogleMap);
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles={
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false, //Hides or show infoWindow
        activeMarker: {}, //Show marker on click
        selectedPlace: {} //Show infoWindow to selected place upon a marker
    }

    onMarkerClick = (props, marker, e) => 
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    
    onClose = props => {
        if(this.state.showingInfoWindow) {
            this.setState({
                // showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{
                    lat: 34.0416711,
                    lng: -118.2627648
                }}
            >
            <Marker 
                onClick={this.onMarkerClick}
                    name={'Whole Foods'}
                    position={{
                        lat: 34.0443479,
                        lng: -118.2671663}}
                />

                <Marker
                    onClick={this.onMarkerClick}
                    name={'Pomona Organic Farm'}
                    position={{
                        lat: 34.0952854,
                        lng: -117.7092007
                    }}
                />
        
            <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
                onClose={this.onClose}
            >
            <div>
                <h4>{this.state.selectedPlace.name}</h4>
            </div>
            </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyBz9J5Y2kIwL2aNxoQLTYYOmHQu49mGILU"
})(MapContainer);
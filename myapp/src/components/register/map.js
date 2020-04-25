import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyDGe5vjL8wBmilLzoJ0jNIwe9SAuH2xS_0");
Geocode.enableDebug();


class Map extends Component {
    state = {
        address: '',
        city: '',
        area: '',
        state: '',
        mapPosition: {
            lat: this.props.center.lat,
            lng: this.props.center.lng
           },
        markerPosition: {
            lat: this.props.center.lat,
            lng: this.props.center.lng
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Map;
import React, { Component, Fragment } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
  } from "react-places-autocomplete";
  

export class Location extends Component {
    state={
        address:"",
        coordinates:{
            lat:null,
            lng:null
        }
    }
    setAddress=(val)=>{
        this.setState({address:val});

    }
    setCoordinates=(coord)=>{
        this.setState({coordinates:coord})
    }

    handleSelect = async value => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        this.setAddress(value);
        this.setCoordinates(latLng);
      };
    onMarkerClick=(e)=>{
        console.log(e)
    }
    render() {
        const style = {
            width: '90%',
            height: '100%'
          }
        return (
            <Fragment>
                <Container>
                    <Row style={{height:"300px"}}>
                    <Col style={{borderRight:"1px solid black"}} >
                    <Map style={style}
          initialCenter={{
            lat: 22.445237,
            lng:  88.416412
          }} google={this.props.google} zoom={14}>
 
                    <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                    {/* <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow> */}
                    </Map>

                    </Col>
                    <Col>
                    <Row>
                        What is the location for service?
                        <PlacesAutocomplete
                            value={this.state.address}
                            onChange={this.setAddress}
                            onSelect={this.handleSelect}
                        >
                            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                            <div>
                                <p>Latitude: {this.state.coordinates.lat}</p>
                                <p>Longitude: {this.state.coordinates.lng}</p>

                                <input {...getInputProps({ placeholder: "Type address" })} />

                                <div>
                                {loading ? <div>...loading</div> : null}

                                {suggestions.map(suggestion => {
                                    const style = {
                                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                                    };

                                    return (
                                    <div {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                            )}
                        </PlacesAutocomplete>
                    </Row>
                    
                    </Col>
                    
                    </Row>
                    
                    
                </Container>
                
                
            </Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: "AIzaSyDW8A7lBPoXOo-h07Q0pFuPanNmcznAd5Y"
  })(Location)
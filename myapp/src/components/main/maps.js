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
        },
        location:""
    }
    componentDidMount=()=>{
        this.props.dispatch(alllist()).then(res=>{
            this.setState({
              locations:res  
            })
        }).catch(err=>{
            console.log(err)
        })
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
                   
                            {
                                this.state.locations?
                                this.state.locations.map((e,i)=>(
                                    
                    <Marker onClick={this.onMarkerClick}
                    name={'Current location'}
                    position={{lat: e.address.lat, lng:e.address.lng}}
                    />
                                    )):null
                            }

                    {/* <InfoWindow onClose={this.onInfoWindowClose}>
                        <div>
                        <h1>{this.state.selectedPlace.name}</h1>
                        </div>
                    </InfoWindow> */}
                    </Map>

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
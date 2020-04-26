import React, { Component, Fragment } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import {Map, InfoWindow, Marker,Circle, GoogleApiWrapper} from 'google-maps-react';
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng
  } from "react-places-autocomplete";
import {alllist} from '../actions/recordactions'

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
        for(var i=0;i<this.state.locations.length;i++){
            var R = 6371e3; // metres
            var lat1=this.props.user.userData.address.lat;
            var lon1=this.props.user.userData.address.lng;
            var lon2=this.state.locations[i].address.lng;
            var lat2=this.state.locations[i].address.lat;
            var φ1 = lat1.toRadians();
            var φ2 = lat2.toRadians();
            var Δφ = (lat2-lat1).toRadians();
            var Δλ = (lon2-lon1).toRadians();
            
            var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                    Math.cos(φ1) * Math.cos(φ2) *
                    Math.sin(Δλ/2) * Math.sin(Δλ/2);
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            
            var dist = R * c
       console.log(dist)
       console.log(this.props)  
       if(dist<1000){
           var locationsmod=this.state.locationsmod
          var locationsmod= locationsmod.concat(this.state.locations[i])
          this.setState({
              locationsmod:locationsmod
          })
       }
    }
    
}
    setAddress=(val)=>{
        this.setState({address:val});
    }
    setCoordinates=(coord)=>{
        this.setState({coordinates:coord})
    }
       coords = { lat: this.props.user.userData.address.lat, lng: this.props.user.userData.address.lng };
   
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
                                this.state.locationsmod.map((e,i)=>(
                                    
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
                    <Circle
        radius={1200}
        center={this.coords}
        onMouseover={() => console.log('mouseover')}
        onClick={() => console.log('click')}
        onMouseout={() => console.log('mouseout')}
        strokeColor='transparent'
        strokeOpacity={0}
        strokeWeight={5}
        fillColor='#FF0000'
        fillOpacity={0.2}
      />
                    </Map>

                    </Col>
                    
                    </Row>
                    
                    
                </Container>
                
                
            </Fragment>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ""
  })(Location)
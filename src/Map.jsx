/*global google*/
import React, { Component } from "react";

import { GoogleMap, useLoadScript, DirectionsService, DirectionsRenderer , DistanceMatrixService } from "@react-google-maps/api";
import MapTest from './MapTest';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import {InputLabel, FilledInput} from '@material-ui/core/';


// const { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } = require("../../");
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;

function Map() {


  //
  // constructor (props) {
  //   super(props)
    //
    // this.state = {
    //   response: null,
    //   travelMode: 'DRIVING',
    //   origin: '',
    //   destination: ''
    // }
      const [value, setValue] = React.useState('TRANSIT');

      const [response, setDirections] = React.useState([]);

      const [waypoints, updateWaypoints] = React.useState([{
        origin:"",
        destination:"",
      }]);
      // const [destination, updateDestination] = React.useState('');
      //
      // const [origin, updateOrigin] = React.useState('');
      // const [travelMode, setTravelMode] = useState('');
      // const [lastName, setLastname] = useState('');

      // const logName = () => {
        // do whatever with the names... let's just log them here
      //   console.log(response);
      //   console.log(firstName);
      //   console.log(lastName);
      // };





    // this.directionsCallback = this.directionsCallback.bind(this)
    // this.getOrigin = this.getOrigin.bind(this)
    // this.getDestination = this.getDestination.bind(this)
    // this.onClick = this.onClick.bind(this)
    // this.onMapClick = this.onMapClick.bind(this)


    const directionsCallback = () => {
        if (response !== null) {
          if (response.status === 'OK') {
            setDirections(response);
            console.log(response);
            console.log('set directions')
          } else {
            console.log('response status: '+response.status  );
            console.log('response: ', response );
          }
        }
        console.log('null response')
    };



  const handleChange = (event) => {
    setValue(event.target.value);
  };




  // const getOrigin = () => {
  //   this.origin = ref
  // };

  // const getDestination = () => {
  //   this.destination = ref
  // };
 const handleDestinationChange = (event) => {
  // updateWaypoints [...waypoints, {origin: this.origin.value, destination: event.target.value}]
  waypoints.destination = event.target.value
  console.log(event.target.value);
  console.log('handleDestinationChange');
  console.log('waypoints.destination: '+waypoints.destination);
 }

 const handleOriginChange = (event) => {
  // updateWaypoints [...waypoints, {origin: this.origin.value, destination: event.target.value}]
  waypoints.origin = event.target.value
  console.log(event.target.value);
  console.log('handleoriginChange');
  console.log('waypoints.origin: '+waypoints.origin);
 }


  // onClick () {
  //   if (this.origin.value !== '' && this.destination.value !== '') {
  //     this.setState(
  //       () => ({
  //         origin: this.origin.value,
  //         destination: this.destination.value
  //       })
  //     )
  //   }
  // }
const onClick =  () => {
  // updateWaypoints([...waypoints, { origin: this.origin.value, destination: this.destination.value}]);

};


  //
  // const onMapClick = () => {
  //   console.log('onClick args: ', args)
  // }

  // render () {
    // const { isLoaded, loadError } = useLoadScript({
    //   googleMapsApiKey:"AIzaSyBdVcGctD6SNcD8sIJ7BbVNLwBat_fWHVo",
    //   // {...other options}
    // })

    const { isLoaded } = useLoadScript({
  // Enter your own Google Maps API key

  googleMapsApiKey: "AIzaSyBdVcGctD6SNcD8sIJ7BbVNLwBat_fWHVo",

});


         // wrapping to a function is useful in case you want to access `window.google`
         // to eg. setup options or create latLng object, it won't be available otherwise
         // feel free to render directly if you don't need that
       // const onLoad = React.useCallback(
       //   function onLoad (mapInstance) {
       //     // do something with map Instance
       //   }
       //  )
     const renderMap = () => {
       console.log('rendering map')
       console.log('origin: '+waypoints.origin)
       console.log('desitnation: ' +waypoints.destination)
       console.log('response: '+response)
       console.log('value: '+value)
       // console.log('isloaded: '+isloaded)
        return (
          <div className='map'>
            <div className='map-settings'>
              <hr className='mt-0 mb-3' />

              <div className='row'>
                <div className='col-md-6 col-lg-4'>
                  <div className='form-group'>
                    <label htmlFor='ORIGIN'>Origin</label>
                    <br />
                    <input id='ORIGIN' className='form-control' type='text'
                     // ref={this.getOrigin}
                     />
                  </div>
                </div>

                <div className='col-md-6 col-lg-4'>
                  <div className='form-group'>
                    <label htmlFor='DESTINATION'>Destination</label>
                    <br />
                    <input id='DESTINATION' className='form-control' type='text'
                     // ref={this.getDestination}
                     />
                  </div>
                </div>
                <div>
                <FormControl variant="filled">
                 <InputLabel htmlFor="component-filled">Origin</InputLabel>

                 <FilledInput id="component-filled"
                  value={'10621 thistlewood ct'}
                  onChange={handleOriginChange} />
               </FormControl>

                </div>
                <br/>
                  <div>
                  <FormControl variant="filled">
                   <InputLabel htmlFor="component-filled">Destination</InputLabel>

                   <FilledInput id="component-filled"
                    value={'9256 fidelis dr'}
                    onChange={handleDestinationChange} />
                 </FormControl>

                  </div>
                  <br/>
              </div>
              <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup aria-label="Trasport Mode" name="transportMode" value={value} onChange={handleChange}>
                      <FormControlLabel value="DRIVING" control={<Radio />} label="DRIVING" />
                      <FormControlLabel value="BICYCLING" control={<Radio />} label="BICYCLING" />
                      <FormControlLabel value="TRANSIT" control={<Radio />} label="TRANSIT" />
                      <FormControlLabel value="WALKING" control={<Radio />} label="WALKING" />
                    </RadioGroup>
                  </FormControl>


              <button className='btn btn-primary' type='button' onClick={onClick}>
                Build Route
              </button>
            </div>

            <div className='map-container'>
              <GoogleMap
                // required
                id='direction-example'
                // required
                mapContainerStyle={{
                  height: '400px',
                  width: '100%'
                }}
                // required
                zoom={6}
                // required
                center={{
                  lat: 0,
                  lng: -180
                }}
                // optional
                // onClick={onMapClick}
                // optional
                onLoad={map => {
                  console.log('DirectionsRenderer onLoad map: ', map)
                }}
                // optional
                onUnmount={map => {
                  console.log('DirectionsRenderer onUnmount map: ', map)
                }}
              >
                {
                  (
                    // this.state.destination !== '' &&
                    // this.state.origin !== ''
                    waypoints.destination !== '' &&
                    waypoints.origin !== ''
                  ) && (
                    <DirectionsService
                      // required
                    /*global google  // eslint-disable-line react-perf/jsx-no-new-object-as-prop */
                      options={{
                        // destination: this.state.destination,
                        destination: waypoints.destination,
                        // origin: this.state.origin,
                        origin:  waypoints.origin,
                        // travelMode: this.state.travelMode
                        travelMode: value,
                      }}
                      // required
                      // callback={directionsCallback}
                      callback = {(response) => {console.log('teh callback repsonse is '+ JSON.stringify(response)) ;
                      console.log('got a response ds 272')}}
                      // optional
                      onLoad={directionsService => {
                        console.log('DirectionsService onLoad directionsService: ', directionsService)
                      }}
                      // optional
                      onUnmount={directionsService => {
                        console.log('DirectionsService onUnmount directionsService: ', directionsService)
                      }}
                    />
                  )
                }

                {
                  // this.state.response !== null && (
                  response !== null && (
                    <DirectionsRenderer
                      // required
                      options={{ /* // eslint-disable-line react-perf/jsx-no-new-object-as-prop*/
                        // directions: this.state.response
                        directions: response
                      }}
                      // optional
                      onLoad={directionsRenderer => {
                        console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                      }}
                      // optional
                      onUnmount={directionsRenderer => {
                        console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                      }}
                    />
                  )
                }
                <DistanceMatrixService
                 options={{
                   // destination: this.state.destination,
                   // origin: this.state.origin,
                   // travelMode: this.state.travelMode
                   destination: waypoints.destination,
                   origin:  waypoints.origin,
                   travelMode: value,
                         }}
                 callback = {(response) => {console.log('teh callback repsonse is '+response) ;
                 console.log('got a response dms')}}
                />
              </GoogleMap>
            </div>
          </div>
        );
      };
      console.log('310')
      return isLoaded ? renderMap() : null;
}
// }
//
// <ScriptLoaded>
//   <Map />
// </ScriptLoaded>

export default Map;

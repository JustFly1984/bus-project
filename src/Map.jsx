/*THIS IS THE STATELESS VERSION OF THE MAP COMPONENT*/
/*global google*/
import React, { useEffect, Component } from "react";

import {
  GoogleMap,
  useLoadScript,
  DirectionsService,
  // DirectionsRenderer ,
  // DistanceMatrixService
} from "@react-google-maps/api";

import MapTest from './MapTest';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import {InputLabel, FilledInput} from '@material-ui/core/';

// components
import DistanceMatrix from './DistanceMatrix';
import RenderDirections from './DirectionsRenderer';
// import DirectionsService from './DirectionsService';


// const { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } = require("../../");
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;
let originHolder
let destinationHolder
let methodHolder
let apiCallFlag = false

function Map() {



      const [value, setValue] = React.useState('BIKING');
      const [count, setCounter] = React.useState(0);

      const [response, setDirections] = React.useState([]);

      const [waypoints, updateWaypoints] = React.useState([{
        origin:"",
        destination:"",
      }]);

      // const [originState, updateOriginState] = React.useState()
      // const [apiFlag, updateApiFlag] = React.useState(false)

    useEffect(() => {
       // getRequest(consts.categoriesURL).then(data => {
       //   setCategories(data.value); // <-- will update state and trigger render
       // });
       console.log('USEEFFECT the callback repsonse is '+ JSON.stringify(response)) ;
       // console.log('')
       // when setDirections is called, we get an endless render and recall loop, but it actually renders the directions on the map
       setDirections(response)

     }, []); // <-- empty dependency is run once on component mount



// This is currently unused, but was the callback to DirectionsService before I turned to console debugging as the callback
    const directionsCallback = () => {

        console.log("response : "+response + JSON.stringify(response))
        if (response !== null) {
          console.log("response status: "+response.status)
          if (response.status === 'OK') {
            setDirections(response);
            // console.log(response);
            // console.log('set directions')
          } else {
            // console.log('response status: '+response.status  );
            // console.log('response: ', Object.values( response) );
            // console.log('string response: ', JSON.stringify(response) );
          }
        }
        // console.log('null response')
        // console.log('the callback repsonse is '+ JSON.stringify(response)) ;
        // setDirections(response)
        // console.log('leaving the callback') ;


          // useEffect(() => {
          //    // getRequest(consts.categoriesURL).then(data => {
          //    //   setCategories(data.value); // <-- will update state and trigger render
          //    // });
          //    console.log('the callback repsonse is '+ JSON.stringify(response)) ;
          //    console.log('got a response ln 272')
          //    // when setDirections is called, we get an endless render and recall loop, but it actually renders the directions on the map
          //    setDirections(response)
          //
          //  }, []); // <-- empty dependency is run once on component mount
          //

    };



  const handleChange = (event) => {
    // setValue(event.target.value);
    methodHolder = event.target.value
  };

// handles the material ui, already filled text fields
 const handleDestinationChange = (event) => {
  // updateWaypoints [...waypoints, {origin: this.origin.value, destination: event.target.value}]


  waypoints.destination = event.target.value

  // destinationHolder = event.target.value


 }

 // handles the material ui text fields
 const handleOriginChange = (event) => {
  waypoints.origin = event.target.value
  // updateOriginState(event.target.value)
  console.log('event value: ' + event.target.value);
  console.log('origin state : '+waypoints.origin);
 }

// this is a residual to handle the "build route" button, and i know that my code is not clean AT ALL surrounding the calling of my google maps functions
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
  // waypoints.origin = originHolder
  // waypoints.destination = destinationHolder
  setValue(methodHolder);
  // console.log(methodHolder)
  // console.log(originHolder)
  // console.log(destinationHolder)
  // updateApiFlag(true)
  apiCallFlag = true
};


function debounce (callback, interval) {
  let debounceTimeoutId;

  return function(...args) {
    clearTimeout(debounceTimeoutId);
    debounceTimeoutId = setTimeout(() => callback.apply(this, args), interval);
  };
}


  //
  // const onMapClick = () => {
  //   console.log('onClick args: ', args)
  // }


// got rid of this when i made it stateless, maybe the render is needed for this to really work?
  // render () {
    // const { isLoaded, loadError } = useLoadScript({
    //   googleMapsApiKey:"AIzaSyBdVcGctD6SNcD8sIJ7BbVNLwBat_fWHVo",
    //   // {...other options}
    // })

    const { isLoaded, loadError} = useLoadScript({
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
       // console.log('RENDERING MAP')
       // console.log('origin: '+waypoints.origin)
       // console.log('desitnation: ' +waypoints.destination)
       // console.log('response: '+ Object.values(response))
       // console.log('value: '+value)
       // console.log('isloaded: '+ isLoaded)
       // console.log("end of rendermap vars")

        return (
          <div className='map'>
            <div className='map-settings'>
              <hr className='mt-0 mb-3' />

              <div className='row'>

                <div>
                <FormControl variant="filled">
                 <InputLabel htmlFor="component-filled">Origin</InputLabel>

                 <FilledInput id="component-filled"
                  value={waypoints.origin}
                  onChange={handleOriginChange} />
               </FormControl>

                </div>
                <br/>
                  <div>
                  <FormControl variant="filled">
                   <InputLabel htmlFor="component-filled">Destination</InputLabel>

                   <FilledInput id="component-filled"
                    value={waypoints.destination}
                    onChange={handleDestinationChange} />
                 </FormControl>

                  </div>
                  <br/>
              </div>
              <FormControl component="fieldset">
                    <FormLabel component="legend">transit method</FormLabel>
                    <RadioGroup aria-label="Trasport Mode" name="transportMode" value={methodHolder} onChange={handleChange}>
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
                  // console.log('DirectionsRenderer onLoad map: ', map)
                }}
                // optional
                onUnmount={map => {
                  // console.log('DirectionsRenderer onUnmount map: ', map)
                }}
              >
                {
                  (
                    // this.state.destination !== '' &&
                    // this.state.origin !== ''
                    waypoints.destination !== '' &&
                    waypoints.origin !== '' &&
                    count <= 1
                    // &&
                    // apiCallFlag == true

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
                      // returns an empty response
                      // callback={directionsCallback}



                      callback = {(response) => {

                        // useEffect(() => {
                        //    // getRequest(consts.categoriesURL).then(data => {
                        //    //   setCategories(data.value); // <-- will update state and trigger render
                        //    // });
                        //    console.log('the callback repsonse is '+ JSON.stringify(response)) ;
                        //    console.log('got a response ln 272')
                        //    // when setDirections is called, we get an endless render and recall loop, but it actually renders the directions on the map
                        //    setDirections(response)
                        //
                        //  }, []); // <-- empty dependency is run once on component mount

                         // console.log('the callback repsonse is '+
                          // JSON.stringify(
                            // Object.values(
                            //   response
                            // )
                          // )
                        // ) ;
                         // console.log('got a response ln 272')
                         // when setDirections is called, we get an endless render and recall loop, but it actually renders the directions on the map
                         debounce(setDirections(response), 3000)
                         let newcount = count + 1
                         setCounter(newcount)
                         // console.log('count:'+count)

                      }}



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
                  console.log('response status:' +response.status)}
                  {
                  response !== null && (
                    <div>
                      <RenderDirections
                      // required
                      options={{ /* // eslint-disable-line react-perf/jsx-no-new-object-as-prop*/
                        // directions: this.state.response

                        directions: response
                      }}
                      // optional
                      onLoad={
                        directionsRenderer => {
                        console.log('DirectionsRenderer onLoad directionsRenderer: ', directionsRenderer)
                      }
                    }
                      // optional
                      onUnmount={directionsRenderer => {
                        console.log('DirectionsRenderer onUnmount directionsRenderer: ', directionsRenderer)
                      }}
                    />
                    <DistanceMatrix

                    options={{
                      // destination: this.state.destination,
                      // origin: this.state.origin,
                      // travelMode: this.state.travelMode
                      destination: waypoints.destination,
                      origin:  waypoints.origin,
                      travelMode: value,
                            }}
                    />
                    </div>
                  )
                }
{
  <DistanceMatrix

  options={{
    // destination: this.state.destination,
    // origin: this.state.origin,
    // travelMode: this.state.travelMode
    destination: waypoints.destination,
    origin:  waypoints.origin,
    travelMode: value,
          }}
  />
}


              </GoogleMap>
            </div>
          </div>
        );
      };
      // console.log('310')
      // console.log('isloaded : ' + isLoaded)

      // {
        // updateApiFlag(false)
      // }
      apiCallFlag = false
      //  condition ? if ture : if false
      return isLoaded ? renderMap() : null;
}
// }
// this was from the documentation of @google-maps-react/api and just doesnt work, cant recall why
// <ScriptLoaded>
//   <Map />
// </ScriptLoaded>

export default Map;

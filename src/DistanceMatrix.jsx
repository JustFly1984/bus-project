/*THIS IS THE STATELESS VERSION OF THE MAP COMPONENT*/
/*global google*/
import React, { useEffect, Component } from "react";

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

function DistanceMatrix() {



      const [value, setValue] = React.useState('TRANSIT');

      const [response, setDirections] = React.useState([]);

      const [waypoints, updateWaypoints] = React.useState([{
        origin:"",
        destination:"",
      }]);

    useEffect(() => {
       // getRequest(consts.categoriesURL).then(data => {
       //   setCategories(data.value); // <-- will update state and trigger render
       // });
       console.log('USEEFFECT the callback repsonse is '+ JSON.stringify(response)) ;
       console.log('')
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
            console.log(response);
            console.log('set directions')
          } else {
            console.log('response status: '+response.status  );
            console.log('response: ', response );
            console.log('string response: ', JSON.stringify(response) );
          }
        }
        console.log('null response')
        console.log('the callback repsonse is '+ JSON.stringify(response)) ;
        // setDirections(response)
        console.log('leaving the callback') ;


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
    setValue(event.target.value);
  };



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
     // const renderMap = () => {

        return (

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
              // </GoogleMap>
          //   </div>
          // </div>
        );
      };
      //  condition ? if ture : if false
      // return isLoaded ? renderMap() : null;
// }
// }

export default DistanceMatrix;

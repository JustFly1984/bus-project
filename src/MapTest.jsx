/*global google*/
import React, { Component } from "react";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   DirectionsRenderer
// } from "react-google-maps";
import { GoogleMap, DistanceMatrixService } from "@react-google-maps/api";





class MapTest extends Component {



    render = () => (

    <GoogleMap
      id="circle-example"
      mapContainerStyle={{
        height: "400px",
        width: "800px"
      }}
      zoom={7}
      center={{
        lat: -3.745,
        lng: -38.523
      }}
    />
)
}

export default MapTest;

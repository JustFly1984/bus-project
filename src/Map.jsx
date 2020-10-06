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

/*global google*/

// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   DirectionsRenderer
// } from "react-google-maps";



class Map extends Component {

  state = {
    response: null,
    travelMode: "DRIVING",
    origin: "",
    destination: "",
  };

  distanceCallback = (response) => {
    console.log("Hello");
    console.log(response);

    if (response !== null) {
      if (response.status === "OK") {
        this.setState(() => ({
          response,
        }));
      } else {
        console.log("response: ", response);
      }
    }
  };

  checkDriving = ({ target: { checked } }) => {
    checked &&
      this.setState(() => ({
        travelMode: "DRIVING",
      }));
  };

  getOrigin = (ref) => {
    this.origin = ref;
  };

  getDestination = (ref) => {
    this.destination = ref;
  };

  onClick = () => {
    if (this.origin.value !== "" && this.destination.value !== "") {
      this.setState(() => ({
        origin: this.origin.value,
        destination: this.destination.value,
      }));
    }
  };

  onMapClick = (...args) => {
    console.log("onClick args: ", args);
  };

  const { isLoaded } = useLoadScript({
// Enter your own Google Maps API key

googleMapsApiKey: "your_api_key",

});

  render = () => (
    <div className="map">
      <div className="map-settings">
        <hr className="mt-0 mb-3" />

        <div className="row">
          <div className="col-md-6 col-lg-4">
            <div className="form-group">
              <label htmlFor="ORIGIN">Origin</label>
              <br />
              <input
                id="ORIGIN"
                className="form-control"
                type="text"
                ref={this.getOrigin}
              />
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="form-group">
              <label htmlFor="DESTINATION">Destination</label>
              <br />
              <input
                id="DESTINATION"
                className="form-control"
                type="text"
                ref={this.getDestination}
              />
            </div>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          <div className="form-group custom-control custom-radio mr-4">
            <input
              id="DRIVING"
              className="custom-control-input"
              name="travelMode"
              type="radio"
              checked={this.state.travelMode === "DRIVING"}
              onChange={this.checkDriving}
            />
            <label className="custom-control-label" htmlFor="DRIVING">
              Driving
            </label>
          </div>
        </div>

        <button
          className="btn btn-primary"
          type="button"
          onClick={this.onClick}
        >
          Build Route
        </button>
      </div>

      <div className="map-container">
        <GoogleMap
          id="map"
          // mapContainerStyle={mapContainerStyle}
          zoom={14}
          center={{ lat: 40.756795, lng: -73.954298 }}
          // options={}
        >
        <DistanceMatrixService
options={{
         destinations: [{lat:1.296788, lng:103.778961}],
         origins: [{lng:103.780267, lat:1.291692}],
         travelMode: "DRIVING",
       }}
callback = {(response) => {console.log(response)}}
/>

        </GoogleMap>

        <MapTest />
      </div>
    </div>
  );
}

export default Map;

/*global google*/
import React, { Component } from "react";
// import {
//   withGoogleMap,
//   withScriptjs,
//   GoogleMap,
//   DirectionsRenderer
// } from "react-google-maps";
import { GoogleMap, DistanceMatrixService } from "@react-google-maps/api";
import MapTest from './MapTest'

//
// <DistanceMatrixService
//      options={{
//        destinations:  { lat: 39.106620, lng: -84.502346 },
//        origins: { lat: 39.105288, lng: -84.514016 },
//        travelMode: this.state.travelMode,
//      }}
//      callback={this.distanceCallback}
//    />



   // var service = new google.maps.DistanceMatrixService();
   // var origin1 = new google.maps.LatLng(55.930385, -3.118425);
   // var origin2 = 'Greenwich, England';
   // var destinationA = 'Stockholm, Sweden';
   // var destinationB = new google.maps.LatLng(50.087692, 14.421150);
   // service.getDistanceMatrix(
   //   {
   //     origins: [origin1, origin2],
   //     destinations: [destinationA, destinationB],
   //     travelMode: 'TRANSIT',
   //     // transitOptions: TransitOptions,
   //     // drivingOptions: DrivingOptions,
   //     // unitSystem: UnitSystem,
   //     // avoidHighways: Boolean,
   //     // avoidTolls: Boolean,
   //   }, callback);
   //
   // function callback(response, status) {
   //   // See Parsing the Results for
   //   // the basics of a callback function.
   // }


//
// class Map extends Component {
//   state = {
//     directions: null
//   };
//
//   componentDidMount() {
//     const directionsService = new google.maps.DirectionsService();
//
//     const origin = { lat: 39.105288, lng: -84.514016 };
//     const destination = { lat: 39.106620, lng: -84.502346 };
//
//     directionsService.route(
//       {
//         origin: origin,
//         destination: destination,
//         travelMode: google.maps.TravelMode.TRANSIT
//       },
//       (result, status) => {
//         if (status === google.maps.DirectionsStatus.OK) {
//           this.setState({
//             directions: result
//           });
//         } else {
//           console.error(`error fetching directions ${result}`);
//         }
//       }
//     );
//   }
//
//   distanceCallback = (response) => {
//      console.log("Hello");
//      console.log(response);
//
//      if (response !== null) {
//        if (response.status === "OK") {
//          this.setState(() => ({
//            response,
//          }));
//        } else {
//          console.log("response: ", response);
//        }
//      }
//    };
//
//
//
//
//
//   render() {
//     const GoogleMapExample = withGoogleMap(props => (
//       <GoogleMap
//         defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
//         defaultZoom={13}
//       >
//
//         <DirectionsRenderer
//           directions={this.state.directions}
//         />
//       </GoogleMap>
//
//     ));
//
//     return (
//       <div>
//         <GoogleMapExample
//           containerElement={<div style={{ height: `500px`, width: "500px" }} />}
//           mapElement={<div style={{ height: `100%` }} />}
//         />
//       </div>
//     );
//   }
// }
//
// export default Map;
//





















//
// import React, { Component } from "react";
// import { GoogleMap, DistanceMatrixService } from "@react-google-maps/api";
//
//



class Map extends Component {




//class ExampleDirections extends Component {
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

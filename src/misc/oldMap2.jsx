/*global google*/
import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  DirectionsRenderer
} from "react-google-maps";
import { DistanceMatrixService } from '@react-google-maps/api';


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



class Map extends Component {
  state = {
    directions: null
  };

  componentDidMount() {
    const directionsService = new google.maps.DirectionsService();

    const origin = { lat: 39.105288, lng: -84.514016 };
    const destination = { lat: 39.106620, lng: -84.502346 };

    directionsService.route(
      {
        origin: origin,
        destination: destination,
        travelMode: google.maps.TravelMode.TRANSIT
      },
      (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.error(`error fetching directions ${result}`);
        }
      }
    );
  }

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





  render() {
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter={{ lat: 40.756795, lng: -73.954298 }}
        defaultZoom={13}
      >

        <DirectionsRenderer
          directions={this.state.directions}
        />
      </GoogleMap>

    ));

    return (
      <div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;

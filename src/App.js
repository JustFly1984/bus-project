import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import LandingHome from './LandingHome.js';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import grey from '@material-ui/core/colors/grey';
import Map from './Map.jsx';
import { withScriptjs } from "react-google-maps";
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#16db93',
    },
    secondary: {
      main: grey[300],
    },
  },
});

// prev implememtation
// const location = {
//   address: '1600 Amphitheatre Parkway, Mountain View, california.',
//   lat: 37.42216,
//   lng: -122.08427,
// }

function App() {
 // const MapLoader = withScriptjs(Map);
 //
 //   const { isLoaded, loadError } = useLoadScript({
 //   googleMapsApiKey:"AIzaSyBdVcGctD6SNcD8sIJ7BbVNLwBat_fWHVo",
 //   // {...other options}
 // })

  return (
    <div>
      <ThemeProvider theme={theme}>
        <LandingHome />
        <TextField id="standard-basic" label="Standard" />
        <Map
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBdVcGctD6SNcD8sIJ7BbVNLwBat_fWHVo"
              loadingElement={<div style={{ height: `100%` }} />}
        />


      </ThemeProvider>
    </div>
  );
}

export default App;

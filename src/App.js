import React from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import LandingHome from './LandingHome';
import SearchPage from './SearchPage';



import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import grey from '@material-ui/core/colors/grey';
import Map from './Map.jsx';

import { ProvideAuth } from "./util/auth.js";
import { Switch, Route, Router } from "./util/router.js";
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
      <ProvideAuth>
        <ThemeProvider theme={theme}>
          <Router>
            <Switch>
              <Route exact path="/" component={SearchPage} />
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/map" component={Map} />
              <Route
                component={({ location }) => {
                  return (
                    <div
                      style={{
                        padding: "50px",
                        width: "100%",
                        textAlign: "center"
                      }}
                    >
                      The page <code>{location.pathname}</code> could not be
                      found.
                    </div>
                  );
                }}
              />
            </Switch>
          </Router>
        </ThemeProvider>
      </ProvideAuth>
    </div>
  );
}

//             <Route exact path="/search" component={SearchPage} />

export default App;

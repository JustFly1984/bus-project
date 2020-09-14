import React from 'react';
// import Home from './Home.js';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function LandingHomeAppBar() {

    return (
      <div >
           <AppBar position="static">
             <Toolbar>
               <IconButton edge="start"  color="inherit" aria-label="menu">
                 <MenuIcon />
               </IconButton>
               <Typography variant="h6" >
                 News
               </Typography>
               <Button variant="contained" color="secondary" >Login</Button>
             </Toolbar>
           </AppBar>
         </div>
    );
}

export default LandingHomeAppBar;

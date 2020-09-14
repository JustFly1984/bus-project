import React from 'react';
import LandingHomeAppBar from './LandingHomeAppBar.js';
import Button from '@material-ui/core/Button';








const LandingHome = () => {

  const GetJobs = () => {
    console.log('here');
    let url = "https://indreed.herokuapp.com/api/jobs?q=JavaScript&l=New%20York&country=us"
    fetch(url)
      .then(function(response) {
        console.log(response);
        console.log('log');
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });



  }

  return (
    <div>
    <LandingHomeAppBar />
    <Button onClick={GetJobs} >GetJobs</Button>
    </div>
  );
}





export default LandingHome;

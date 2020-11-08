import React from 'react';
import LandingHomeAppBar from './LandingHomeAppBar.js';
import Button from '@material-ui/core/Button';








const LandingHome = () => {

  const GetJobs = () => {
    console.log('here');
    // <span class="url" data-key="url">/api/jobs?l=Lagos&amp;country=ng&amp;sort=date&amp;jt=contract&amp;radius=25</span>
    let url = "https://cors-anywhere.herokuapp.com/https://indreed.herokuapp.com/api/jobs?q=dry%20cleaning&l=Cincinnati&country=us&amp;sort=date&amp;radius=25"
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

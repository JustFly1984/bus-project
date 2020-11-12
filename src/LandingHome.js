import React from 'react';
import LandingHomeAppBar from './LandingHomeAppBar.js';
import SearchPage from './SearchPage.js';
import SearchButton from './SearchButton.js';
import Button from '@material-ui/core/Button';


import { useRouter } from "./util/router.js";



const LandingHome = () => {

  const router = useRouter();

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
  const PricingRoute = () => {
    router.push("/search");
  }

  return (
    <div>
    <LandingHomeAppBar />
    // <Button onClick={GetJobs} >GetJobs</Button>
    // <Button onClick={PricingRoute} > search for jobs</Button>
    <SearchButton
    buttonOnClick={() => {
      router.push("/search");
    }}
    />
    </div>
  );
}





export default LandingHome;

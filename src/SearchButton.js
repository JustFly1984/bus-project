import React from 'react';
import LandingHomeAppBar from './LandingHomeAppBar.js';
import SearchPage from './SearchPage.js';
import Button from '@material-ui/core/Button';


import { useRouter } from "./util/router.js";



const SearchButton = (props) => {
  const {
  buttonOnClick
} = props;

  // const router = useRouter();




  // const PricingRoute = () => {
  //   router.push("/search");
  // }

  return (
    <div>
    <Button onClick={buttonOnClick} >go to search</Button>
    </div>
  );
}





export default SearchButton;

import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import {InputLabel, FilledInput} from '@material-ui/core/';


let queryString

const SearchPage = () => {
  const [queryString, setQuery] = React.useState('');
  const [zipCode, setZip] = React.useState('');

  const GetJobs = () => {

    console.log('here');

    let encodedQueryString = encodeURI(queryString);
    console.log(encodedQueryString);
    // <span class="url" data-key="url">/api/jobs?l=Lagos&amp;country=ng&amp;sort=date&amp;jt=contract&amp;radius=25</span>
    let url = "https://cors-anywhere.herokuapp.com/https://indreed.herokuapp.com/api/jobs?q="+encodedQueryString+"&l=Cincinnati&country=us&amp;sort=date&amp;radius=5"
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
  const handleJobChange = (event) => {
    // this.setState{
    //   queryString: event.target.value
    // }
    setQuery(event.target.value)
    console.log(queryString)
  }
  const handleZipChange = (event) => {
    // this.setState{
    //   queryString: event.target.value
    // }
    setZip(event.target.value)
    console.log(zipCode)
  }
  return (
    <div>
    <FormControl variant="filled">
     <InputLabel htmlFor="component-filled">Jobtitle, keyword, or company</InputLabel>

     <FilledInput id="component-filled"
      value={queryString}
      onChange={handleJobChange} />
   </FormControl>
   <FormControl variant="filled">
    <InputLabel htmlFor="component-filled">zip code nearest you</InputLabel>
    <FilledInput id="component-filled"
     value={zipCode}
     onChange={handleZipChange} />
  </FormControl>
    <Button onClick={GetJobs} >GetJobs</Button>
    </div>
  );
}


export default SearchPage;

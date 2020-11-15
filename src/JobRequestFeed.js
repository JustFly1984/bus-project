import React, {useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import SimpleCard from './SimpleCard';

let company
let title
let date
let location
let summary
let jobUrl



const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function JobRequestFeed(props) {

  const classes = useStyles();
  // const bull = <span className={classes.bullet}>•</span>;
  const {
      apiResponse,
      apiStatus,
      // subtitle,
      // buttonOnClick,
      // buttonText,
      // image,
      // ...otherProps
    } = props;



     const [apiResponseVal, setApiResponseVal] = useState(props.apiResponse);
     const [apiStatusVal, setApiStatusVal] = useState(props.apiStatus);
     // const [errors, setErrors] = useState(0);

     useEffect(() => {
       setApiResponseVal(props.apiResponse);
     }, [props.apiResponse]);

     useEffect(() => {
       setApiStatusVal(props.apiStatus);
       console.log("apistatuschange");
     }, [props.apiStatus]);





console.log(apiStatus)
console.log("rendered job requests")
  const elements = apiResponse;
  // props.apiResponse
const consoleBro = () => {
  console.log('props.apiStatus : '+props.apiStatus)
  console.log('props.apiResponse : '+props.apiResponse)
  console.log('apiResponseVal : '+apiResponseVal)
  console.log('apiStatusVal : '+apiStatusVal)
}
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing="3"
      >
        {apiStatus === 200 &&
          elements !== '' &&
            elements.map((value, index) => {
              console.log(value)
              console.log(index)
              console.log(elements[1])
            return(
              <Grid item xs={6}>
                <SimpleCard
                  company={value.company}
                  title={value.title}
                  date={value.date}
                  location={value.location}
                  summary={value.summary}
                  jobUrl={value.url}
                />
              </Grid>
            )
          })
      }

    </Grid>
  );
}

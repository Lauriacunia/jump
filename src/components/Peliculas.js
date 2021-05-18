import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';

const useStyles = makeStyles({
  root: {
    backgroundColor: lightBlue[300],
    width:"100%",
  },
});

const Peliculas = () => {
  const classes = useStyles();
    return (
      <div className= {classes.root}>
        <p>soy peliculas</p>
      </div>
    );
  }
  
  export default Peliculas
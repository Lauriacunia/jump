import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import lime from '@material-ui/core/colors/lime';

const useStyles = makeStyles({
  root: {
    backgroundColor: lime[300],
    width:"100%",
  },
   
});


const Lanzamientos = () => {
  const classes = useStyles();
    return (
      <div className= {classes.root}>
        <p>soy lanzamientos</p>
      </div>
    );
  }
  
  export default Lanzamientos
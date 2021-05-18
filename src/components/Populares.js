import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';

const useStyles = makeStyles({
  root: {
    backgroundColor: pink[300],
    width:"100%",
  },
});


const Populares = () => {
  const classes = useStyles();
    return (
      <div className= {classes.root}>
        <p>soy populares</p>
      </div>
      
    );
  }
  
  export default Populares
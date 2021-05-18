import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';


const useStyles = makeStyles({
  root: {
    backgroundColor: yellow[300],
    width:"100%",
  },
});


const Series = () => {
  const classes = useStyles();
  
    return (
      <div className= {classes.root}>
        <p>soy series</p>
      </div>
    );
  }
  
  export default Series
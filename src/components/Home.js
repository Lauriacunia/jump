import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';

const useStyles = makeStyles({
  root: {
    backgroundColor: purple[600],
    width:"100%",
  },
   
});


const Home = () => {
  const classes = useStyles();
  
  return (
    <div className= {classes.root}>
      <p>soy home</p>
    </div>
  );
}

export default Home
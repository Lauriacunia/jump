
import React from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Slider from "./Slider";


const useStyles = makeStyles({
   
    tituloContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: 10,
      marginBottom: 10,
      cursor: "pointer",
    },
   
    flecha: {
      width:30,
      height: 25,
      marginLeft:20,
    }
     
  });

const TituloSlider = ({title}) => {
    const classes = useStyles();
    const history = useHistory();
    
return(
    <div className={classes.tituloContainer}
         onClick = {()=> { history.push("/home")}} >
    <Typography variant="h6" gutterBottom>
        {title} 
    </Typography>
    <img className={classes.flecha} 
      src = "https://user-images.githubusercontent.com/63796774/119421253-ad35b980-bcd4-11eb-8a5a-3d7edfa71c12.png"
      />
  </div>
  )
    
}

export default TituloSlider;
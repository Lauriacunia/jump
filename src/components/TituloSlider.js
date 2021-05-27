
import React from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Imagen from "./Imagen";


const useStyles = makeStyles({
   
    tituloContainer: {
      display: "flex",
      alignItems: "center",
      marginTop: 10,
      marginBottom: 10,
      cursor: "pointer",
      '&:hover': {
        transform: `translate(5px)`,   
      },
    },
    titulo: {
      marginRight: `20px`,
    },
       
  });

const TituloSlider = ({title}) => {
    const classes = useStyles();
    const history = useHistory();
    
return(
    <div className={classes.tituloContainer}
         onClick = {()=> { history.push("/home")}} >
    <Typography className={classes.titulo}
                variant="h6" gutterBottom>
        {title} 
    </Typography>
    <Imagen ruta={"https://user-images.githubusercontent.com/63796774/119421253-ad35b980-bcd4-11eb-8a5a-3d7edfa71c12.png"}
            ancho={"30"} 
            alto={"25"} />
    
  </div>
  )
    
}

export default TituloSlider;
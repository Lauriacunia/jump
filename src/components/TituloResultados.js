import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    tituloContainer: {
      color: "white",
    },
  });

  
const TituloResultados = ({totalDeResultados}) => {

    const classes = useStyles();

    return (
        <div>
            <div className= {classes.tituloContainer}>
                <Typography className={classes.titulo}
                    variant="h6" gutterBottom>
                    Total: {totalDeResultados} resultados
                </Typography>
            </div> 
        </div>
    )
}

export default TituloResultados

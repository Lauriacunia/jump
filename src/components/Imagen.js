import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

let anchoImg = "";
let altoImg = "";

const useStyles = makeStyles({

    imgContainer: {
      display:"flex",
      width:{anchoImg},
      height: {altoImg},
    },
    img: {
        width:"100%",
    }
});

const Imagen = ({ruta, ancho, alto}) => {
    console.log(ancho, alto)
    const classes = useStyles();
    anchoImg = ancho;
    altoImg = alto;

        return (
                <div className={classes.imgContainer}>
                    <img className={classes.imgContainer}
                        src = {ruta}
                    />
                </div>
        );
    }

export default Imagen 
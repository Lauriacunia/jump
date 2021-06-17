import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import imageNotFound from '../assets/noimg.png';


const Imagen = ({ruta, ancho, alto}) => {
    console.log(ancho, alto)
    
    const useStyles = makeStyles({

        imgContainer: {
          display:"flex",
          width:`${ancho}px`,
          height: `${alto}px`,
        },
        img: {
            width:"100%",
        }
    });

    !ruta && (ruta= imageNotFound)
    const classes = useStyles();

        return (
                <div className={classes.imgContainer}>
                    <img className={classes.imgContainer}
                        src = {ruta}
                    />
                </div>
        );
    }

export default Imagen 
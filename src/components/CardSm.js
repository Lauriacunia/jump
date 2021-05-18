import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        width: 230,
        margin: "15",
    },
    media: {       
        display: "block",
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    pos: {
        marginBottom: 12,
    },
    details: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "flex-start",
        height: 50,
    },


});

const CardSm = ({ resultado}) => {
    console.log(resultado)
    const classes = useStyles();

    const recortarTitulo = (str) => {
        let strCorto = `${str.slice(0, 28)}...`
        return strCorto;
    };

    const handleClick = () => {
        console.log("hola")
    }

    return (

        <div
            className={classes.root}
            key={resultado.id}
            onClick={handleClick}
        >
            <div className={classes.media}>
                <img
                src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2/${resultado.poster_path}`}
                />
            </div>
            
            <div className={classes.details}>
                <Typography gutterBottom variant="body1" color="textSecondary">
                    {resultado.original_name < 28
                        ? resultado.original_name
                        : recortarTitulo(resultado.original_name)
                    }
                </Typography>
            </div>
        </div>

    )
};

export default CardSm;
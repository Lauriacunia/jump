import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({  
    root: {
        color: "white",
      
    },
}));


const TemporadasContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            soy temporadas
        </div>
    )
}

export default TemporadasContainer

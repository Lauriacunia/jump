import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({  
    root: {
        color: "white",
      
    },
}));

const CastContainer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            soy cast
        </div>
    )
}

export default CastContainer

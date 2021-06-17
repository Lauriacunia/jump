import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({  
    root: {
        color: "white",
      
    },
}));

const TrailersContainer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            soy trailers
        </div>
    )
}

export default TrailersContainer

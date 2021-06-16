import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({  
    root: {
        color: "white",
      
    },
}));


const SimilarContainer = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            soy similar
        </div>
    )
}

export default SimilarContainer

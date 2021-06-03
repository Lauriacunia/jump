import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      backgroundColor: "transparent",
      width:"100%",
      color: "#fafafa",
    },
  });
  
const GridContainer2 = () => {
    const classes = useStyles();
    return (
        <p className= {classes.root}>Acá irian todas las tarjetas de esa categoria con su paginado </p>
    )
}

export default GridContainer2
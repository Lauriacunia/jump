import React from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';

import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import AppBar from '@material-ui/core/AppBar';


const useStyles = makeStyles((theme) => ({
    root: {
      
    },
  }));


const LinkIco = ({title, ico}) =>{
    const classes = useStyles();
    const history = useHistory();

    return (
        <div onClick = {()=> { history.push(`/${title}`)}} >       
               {ico}
              <Typography variant="h6">
               {title}
              </Typography>               
        </div>

    )
};

export default LinkIco 
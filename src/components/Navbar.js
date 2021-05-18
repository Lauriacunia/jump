import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Search from "./Search";
import TabsContainer from "./TabsContainer"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Navbar = () => {
    const classes = useStyles();

    return (
 
        <div className={classes.root}>

        <AppBar position="static">
            <Toolbar>
                <Hidden smUp>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                </Hidden>
                <Link to="/home">
                  <Button>JUMP</Button>  
                </Link>
                  
                <Hidden xsDown>
                    <TabsContainer></TabsContainer>
                </Hidden>
                
                <Search></Search>

                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

        </div>
  
    );
}

export default Navbar
import React from 'react';
import { useHistory} from 'react-router-dom'
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TabsContainer from "./TabsContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor:"transparent",  
  },
  logo:{
      cursor: "pointer",
      '&:hover': {
        transform: `scale(1.2)`}
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


const Navbar = ({handleSubmit, handleChange, valorDelInput}) => {
    const classes = useStyles();
    const history = useHistory();

    return (
 
        <div className={classes.root}>

        <AppBar className={classes.navbar} position="sticky">
            <Toolbar>
                <Hidden smUp>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                      <MenuIcon />
                    </IconButton>
                </Hidden>
                <img className={classes.logo} 
                     src = "https://user-images.githubusercontent.com/63796774/119274985-f0b2f980-bbe8-11eb-9d6a-5723d70ae69f.png"
                     onClick = {()=> { history.push("/")}}/>
                <TabsContainer />    
            </Toolbar>
        </AppBar>

        </div>
  
    );
}

export default Navbar
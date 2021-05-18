import React from 'react';
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import ContactsIcon from '@material-ui/icons/Contacts';
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import AppBar from '@material-ui/core/AppBar';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

const  TabsContainer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Link to="/lanzamientos">
            <Tab label="Lanzamientos" icon={<ConfirmationNumberIcon />} {...a11yProps(1)}/ >
          </Link>
          <Link to="/populares">
            <Tab label="Populares" icon={<FavoriteIcon/>}{...a11yProps(2)} />  
          </Link>
          <Link to="/peliculas"> 
            <Tab label="Peliculas" icon={<HelpIcon />} {...a11yProps(3)} />
          </Link> 
          <Link to="/series">
           <Tab label="Series" icon={<ShoppingBasket />} {...a11yProps(4)}/>
          </Link>
        </Tabs>
      </AppBar>

    </div>
  );
}

export default TabsContainer
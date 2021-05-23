import React from 'react';
import { useHistory, useParams, useLocation, Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InsertEmoticonOutlinedIcon from '@material-ui/icons/InsertEmoticonOutlined';
import TheatersOutlinedIcon from '@material-ui/icons/TheatersOutlined';
import MovieFilterOutlinedIcon from '@material-ui/icons/MovieFilterOutlined';

const TabPanel = (props) => {
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

const a11yProps = (index) => {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    color: "white",
    backgroundColor: "transparent",
  },
  tabs: {
    backgroundColor: "transparent",
    paddingBottom: 15,
    color: "#fafafa",
  }
}));

const TabsContainer = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.tabs} position="static" color="white">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="white"
          aria-label="scrollable force tabs example"
        >
          <Tab onClick={() => { history.push(`/lanzamientos`) }}
            label="lanzamientos"
            icon={<InsertEmoticonOutlinedIcon />}
            {...a11yProps(0)} />
          <Tab onClick={() => { history.push(`/populares`) }}
            label="populares"
            icon={<FavoriteIcon />}
            {...a11yProps(1)} />
          <Tab onClick={() => { history.push(`/peliculas`) }}
            label="Peliculas"
            icon={<TheatersOutlinedIcon />}
            {...a11yProps(2)} />
          <Tab onClick={() => { history.push(`/series`) }}
            label="series"
            icon={<MovieFilterOutlinedIcon />}
            {...a11yProps(3)} />

        </Tabs>
      </AppBar>

    </div>
  );
}
export default TabsContainer
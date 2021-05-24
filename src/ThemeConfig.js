import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import lime from '@material-ui/core/colors/lime';


const theme = createMuiTheme({

    palette: {
        primary: {
          main: purple[600],
        },
        secondary: {
          main: "#ffff00",
        },
      },

      typography: {
        h1: {
          fontFamily: [
            '"Ubuntu"',
            'sans-serif',  
          ].join(','),
          fontWeight: 500,
        },
        h2: {
          fontFamily: [
            '"Ubuntu"',
            'sans-serif',  
          ].join(','),
          fontWeight: 500,
        },
        h6: {
          fontFamily: [
            '"Ubuntu"',
            'sans-serif',  
          ].join(','),
          fontWeight: 300,
        },
      }
});

export default theme
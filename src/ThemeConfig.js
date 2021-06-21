import { createMuiTheme } from '@material-ui/core/styles';
import pink from '@material-ui/core/colors/pink';
import cyan from '@material-ui/core/colors/cyan';

// Buen uso del theme de material! 
const theme = createMuiTheme({
  
        palette: {
        primary: {
          main: cyan[500],
        },
        secondary: {
          main: pink[500],
        },
      },
      typography: {
        h1: {
          fontFamily: [
            'Oswald',
            'sans-serif',
          ].join(','),
          fontWeight: 700,
        },
        h2: {
          fontFamily: [
            'Oswald',
            'sans-serif',
          ].join(','),
          fontWeight: 700,
        },
        h3: {
          fontFamily: [
            'Oswald',
            'sans-serif',
          ].join(','),
          fontWeight: 700,
        },
        h4: {
          fontFamily: [
            'Oswald',
            'sans-serif',
          ].join(','),
          fontWeight: 500,
        },
        h5: {
          fontFamily: [
            'Oswald',
            'sans-serif',
          ].join(','),
          fontWeight: 500,
        },
        h6: {
          fontFamily: [
            'Oswald',
            'sans-serif',
          ].join(','),
          fontWeight: 500,
        },
      }
});

export default theme

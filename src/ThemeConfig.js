import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import lime from '@material-ui/core/colors/lime';
import pink from '@material-ui/core/colors/pink';
import lightBlue from '@material-ui/core/colors/lightBlue';




const theme = createMuiTheme({
    palette: {
        primary: {
          main: purple[600],
        },
        secondary: {
          main: lime[300],
        },
        danger: {
            main: pink[300],
          },
        sucess:{
            main: lightBlue[300],
          },
      },

})

export default theme
import { createMuiTheme } from '@material-ui/core/styles';
// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#143D71', //azul
      light: '#61dafb',
      dark: '#f50057', // fuscia
      contrastText: '#fff',
    },
    secondary: {
      main: '#05C6AF',
      light: '#61dafb', //celeste
      dark: '#21a1c4',
      contrastText: '#fff',
    },
   
    background: {
      default: '#282c34',
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: '20px 10px',
        margin: '10px',
        backgroundColor: '#fff', // 5d737e
      },
    },
    MuiButton: {
      root: {
        margin: '5px',
      },
    },
  },
  // typography: {
  //   h6: {
  //     fontWeight: 600 // or 'bold'
  //   }
  // }
});
export default theme;
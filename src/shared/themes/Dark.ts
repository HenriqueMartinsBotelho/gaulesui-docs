import { createTheme } from '@mui/material';
import { cyan, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: yellow[700],
      dark: yellow[800],
      light: yellow[500], 
      contrastText: '#ffffff',
      50: '#377A74',
      100: '#f7ece1',      
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#725AC1',
      default: '#242038',
      
    },
    text: {
      primary: '#8D86C9',
      secondary: '#cac4ce',
    }
    
  },
  typography: {
    allVariants: {
      color: 'white',
    }
  }
});

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
    },
    secondary: {
      main: cyan[500],
      dark: cyan[400],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#131325',
      default: '#131325',
    },
    text: {
      primary: '#4FD1C5',
      secondary: '#3FC7BF',
    }
    
  },
  typography: {
    allVariants: {
      color: 'white',
    }
  }
});

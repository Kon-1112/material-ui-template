import { createTheme, Theme } from '@mui/material';

export const theme: Theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: '40px',
      fontWeight: 700,
      my: 'auto',
    },
    h2: {
      fontSize: '36px',
      fontWeight: 400,
      my: 'auto',
    },
    h3: {
      fontSize: '22px',
      fontWeight: 400,
      my: 'auto',
    },
    h4: {
      fontSize: '20px',
      fontWeight: 600,
      my: 'auto',
    },
    h5: {
      fontSize: '18px',
      fontWeight: 400,
      my: 'auto',
    },
    h6: {
      fontSize: '16px',
      fontWeight: 400,
      my: 'auto',
      color: '#3b4038',
    },
    body1: {
      fontSize: '16px',
      fontWeight: 400,
      color: '#3b4038',
    },
    body2: {
      fontSize: '14px',
      fontWeight: 300,
      color: '#585961',
    },
  },
  palette: {
    primary: {
      main: '#004abf',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#3b4038',
      contrastText: '#ebebeb',
    },
    success: {
      main: '#119f1a',
      contrastText: '#ffffff',
    },
    error: {
      main: '#c61111',
      contrastText: '#ffe4e4',
    },
    warning: {
      main: '#ffb35e',
      contrastText: '#fffef8',
    },
    info: {
      main: '#0826cd',
      contrastText: '#ffffff',
    },
  },
});

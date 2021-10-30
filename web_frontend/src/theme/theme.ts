import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {};
  }
  interface ThemeOptions {
    status?: {};
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fc8132',
      contrastText: '#fff',
    },
  },
});

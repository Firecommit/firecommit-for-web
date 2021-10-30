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
  components: {
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          paddingTop: 40,
          paddingLeft: 40,
          paddingRight: 40,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          paddingLeft: 40,
          paddingRight: 40,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          paddingLeft: 40,
          paddingRight: 40,
          paddingBottom: 40,
        },
      },
    },
  },
});

import { green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      success: string;
    };
  }
  interface ThemeOptions {
    status?: {
      success: string;
    };
  }
}

export const theme = createTheme({
  status: {
    success: green[500],
  },
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

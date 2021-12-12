import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { AuthContext } from './AuthProvider';
import { Logo } from './Logo';

export const NavBar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1, position: 'fixed', top: 0, width: '100%' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Logo />
          </Typography>
          {currentUser ? (
            <Button variant="outlined" color="inherit" href="/workspace">
              Workspace
            </Button>
          ) : (
            <>
              <Button
                variant="outlined"
                color="inherit"
                href="/signin"
                sx={{ mr: 2 }}
              >
                Sign in
              </Button>
              <Button variant="outlined" color="inherit" href="/signup">
                Sign up
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

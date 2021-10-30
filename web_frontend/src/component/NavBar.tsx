import React, { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { AuthContext } from './AuthProvider';

export const NavBar = ({ title }: { title: string }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
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

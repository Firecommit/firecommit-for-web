import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = ({ title }: { title: string }) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static" color="default">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Button color="inherit" href="/signin">
          Sign in
        </Button>
        <Button color="inherit" href="/signup">
          Sign up
        </Button>
      </Toolbar>
    </AppBar>
  </Box>
);

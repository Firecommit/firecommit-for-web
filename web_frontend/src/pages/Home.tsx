import React, { FC } from 'react';
import { Container, Typography } from '@mui/material';
import { NavBar } from '../component/NavBar';

export const HomeScreen: FC = () => (
  <>
    <NavBar title="Firecommit" />
    <Container maxWidth="sm">
      <Typography variant="h1" component="div" gutterBottom>
        HOME Screen
      </Typography>
    </Container>
  </>
);

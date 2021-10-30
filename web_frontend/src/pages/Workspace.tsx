import { Box, Button, Container, Paper, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../component/AuthProvider';
import { auth } from '../firebase';

export const WorkspaceScreen = withRouter((props) => {
  const { currentUser } = useContext(AuthContext);
  const signOut = () => {
    auth.signOut().then(() => {
      props.history.push('/signin');
    });
  };
  return (
    <Container maxWidth="md">
      <Box sx={{ height: '100vh', textAlign: 'center' }}>
        <Typography variant="h2" component="div" gutterBottom>
          Workspace
        </Typography>
        <Box sx={{ '& *': { mt: 3, mb: 3 } }}>
          <Paper
            elevation={3}
            sx={{ width: '100%', height: 400, textAlign: 'left', pb: 2 }}
          >
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              sx={{ borderBottom: '1px solid #ccc', paddingX: 2, paddingY: 1 }}
            >
              {currentUser?.email}のワークスペース
            </Typography>
          </Paper>
          <Button variant="outlined" onClick={signOut}>
            Sign Out
          </Button>
        </Box>
      </Box>
    </Container>
  );
});

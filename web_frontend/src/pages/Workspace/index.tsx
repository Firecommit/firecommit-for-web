import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AuthContext } from '../../component/AuthProvider';
import { auth } from '../../firebase';
import ShareIcon from './share-icon.svg';

export const WorkspaceScreen = withRouter((props) => {
  const { currentUser } = useContext(AuthContext);
  const signOut = () => {
    auth.signOut().then(() => {
      props.history.push('/signin');
    });
  };
  return (
    <Box sx={{ height: '100vh' }}>
      <Box component="section" sx={{ padding: '80px 0' }}>
        <Container maxWidth="lg">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={5}>
              <Typography variant="h3" component="div" fontWeight="bold" mb={3}>
                FIRECOMMIT マップサーバーを新規作成
              </Typography>
              <Typography variant="body1" mb={3}>
                FIRECOMMITによって、チームが位置情報を共有し合い、
                ともに働く人々の業務効率化を目的とした屋内マップができます。
                新しくマップサーバーを作成するには、下のボタンをクリックしてください。
              </Typography>
              <Button
                component={Link}
                to="/createmap"
                variant="contained"
                color="primary"
                sx={{ mb: 3 }}
              >
                マップサーバーを作成する
              </Button>
              <Typography variant="body2" color="#777">
                続行することにより、FIRECOMMITのサービス利用規約、
                プライバシーポリシーに同意したものとみなされます。
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <img src={ShareIcon} alt="share" />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        component="section"
        sx={{ backgroundColor: '#FAF7F4', padding: '80px 0' }}
      >
        <Container maxWidth="md" sx={{ padding: '0 16px' }}>
          <Box sx={{ '& *': { mt: 3, mb: 3 } }}>
            <Typography
              variant="h6"
              component="div"
              fontWeight="bold"
              textAlign="center"
            >
              マップサーバーを開く
            </Typography>
            <Paper
              elevation={3}
              sx={{ width: '100%', height: 400, textAlign: 'left', pb: 2 }}
            >
              <Typography
                variant="body1"
                component="div"
                gutterBottom
                fontWeight="bold"
                sx={{
                  borderBottom: '1px solid #ccc',
                  paddingX: 2,
                  paddingY: 1,
                }}
              >
                {currentUser?.email}のワークスペース
              </Typography>
            </Paper>
            <Button variant="outlined" onClick={signOut}>
              Sign Out
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
});

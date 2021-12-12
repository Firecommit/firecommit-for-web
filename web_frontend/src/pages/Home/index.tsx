import React, { FC } from 'react';
import { Container, Box, Grid, Typography } from '@mui/material';
import { NavBar } from '../../component/NavBar';
import ConceptIcon from './concept-icon.svg';

export const HomeScreen: FC = () => (
  <>
    <NavBar />
    <Container maxWidth="lg" sx={{ height: '100vh' }}>
      <Box sx={{ display: 'flex', height: '100%' }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={5}>
            <Typography
              variant="h6"
              component="div"
              gutterBottom
              fontWeight="bold"
            >
              働く人のためのFIRECOMMIT
            </Typography>
            <Typography
              variant="h3"
              component="div"
              mb={5}
              fontWeight="bold"
              lineHeight="65px"
              letterSpacing="3px"
            >
              その「コミットに」
              <br />
              火を付ける。
            </Typography>
            <Typography variant="body1" mb={5} color="#707070">
              FIRECOMMITはもやしのように低コスト。またインフラ整備をする必要がありません。何より、従業員の安全や効率を底上げします。
            </Typography>
            <Typography variant="body1" fontWeight="bold">
              FIRECOMMITはあらゆる規模の組織をサポートします。
            </Typography>
          </Grid>
          <Grid item xs>
            <img src={ConceptIcon} alt="concept" />
          </Grid>
        </Grid>
      </Box>
    </Container>
  </>
);

import React from 'react';
import { Box, Dialog } from '@mui/material';
import { MapServerNaming } from './MapServerNaming';

export type OuterProps = {};

export type Props = OuterProps & {};

export const CreateMapServerDialogPresenter = () => (
  <Dialog open fullWidth>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '568px',
      }}
    >
      <MapServerNaming />
    </Box>
  </Dialog>
);

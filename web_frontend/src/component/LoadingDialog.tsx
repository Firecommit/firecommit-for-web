import React from 'react';
import { CircularProgress, DialogContent, Typography } from '@mui/material';

export const LoadingDialog = () => (
  <>
    <DialogContent
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
      }}
    >
      <CircularProgress />
      <Typography>マップサーバー作成中</Typography>
    </DialogContent>
  </>
);

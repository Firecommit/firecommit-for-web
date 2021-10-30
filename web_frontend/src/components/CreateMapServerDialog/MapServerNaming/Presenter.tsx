import React from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';

export type OuterProps = {};

export type Props = OuterProps & {};

export const MapServerNamingPresenter = () => (
  <>
    <DialogTitle>
      <Typography
        variant="subtitle2"
        sx={{
          marginBottom: 2,
          color: grey[500],
        }}
      >
        手順1/3
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
        社名または組織名を教えて下さい。
      </Typography>
    </DialogTitle>
    <DialogContent>
      <Typography variant="body2" sx={{ marginBottom: 2 }}>
        これがあなたのFIRECOMMITマップサーバの名前になります。組織にとって分かりやすいものを選んでください。
      </Typography>
      <TextField placeholder="例: ABC 社、ABC 営業部" size="small" fullWidth />
    </DialogContent>
    <DialogActions>
      <Button variant="contained" size="large" sx={{ minWidth: '152px' }}>
        次へ
      </Button>
    </DialogActions>
  </>
);

import React from 'react';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';

import {
  ProgressTypography,
  DialogTitleTypography,
  DialogContentExplain,
  DialogContentTextField,
  DialogActionsButton,
} from '../DialogItems';

export type OuterProps = {};

export type Props = OuterProps & {};

export const MapServerNamingPresenter = () => (
  <>
    <DialogTitle>
      <ProgressTypography>手順1/3</ProgressTypography>
      <DialogTitleTypography>
        社名または組織名を教えて下さい。
      </DialogTitleTypography>
    </DialogTitle>
    <DialogContent>
      <DialogContentExplain>
        これがあなたのFIRECOMMITマップサーバの名前になります。組織にとって分かりやすいものを選んでください。
      </DialogContentExplain>
      <DialogContentTextField placeholder="例: ABC 社、ABC 営業部" fullWidth />
    </DialogContent>
    <DialogActions>
      <DialogActionsButton>次へ</DialogActionsButton>
    </DialogActions>
  </>
);

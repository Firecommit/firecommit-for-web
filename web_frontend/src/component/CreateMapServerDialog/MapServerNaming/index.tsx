import React, { ChangeEvent } from 'react';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';

import {
  ProgressTypography,
  DialogTitleTypography,
  DialogContentExplain,
  DialogContentTextField,
  DialogActionsButton,
} from '../DialogItems';

export type Props = {
  nextPage: () => void;
  handleChangeOrgName: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const MapServerNaming = ({ nextPage, handleChangeOrgName }: Props) => (
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
      <DialogContentTextField
        placeholder="例: ABC 社、ABC 営業部"
        fullWidth
        onChange={handleChangeOrgName}
      />
    </DialogContent>
    <DialogActions>
      <DialogActionsButton onClick={nextPage}>次へ</DialogActionsButton>
    </DialogActions>
  </>
);

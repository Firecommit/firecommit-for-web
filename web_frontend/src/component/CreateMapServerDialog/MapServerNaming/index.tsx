import React, { ChangeEvent, useState } from 'react';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { Valid, mapServerNamingValidator } from './validator';

import {
  ProgressTypography,
  DialogTitleTypography,
  DialogContentExplain,
  DialogContentTextField,
  DialogActionsButton,
} from '../DialogItems';

export type Props = {
  nextPage: () => void;
  orgName: string;
  handleChangeOrgName: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const MapServerNaming = ({
  nextPage,
  orgName,
  handleChangeOrgName: onChange,
}: Props) => {
  const [nameValid, setNameValid] = useState<Valid>({ valid: true } as Valid);
  const handleChangeOrgName = (e: ChangeEvent<HTMLInputElement>) => {
    setNameValid(mapServerNamingValidator(e.target.value));
    onChange(e);
  };
  const handleClickNextPage = () => {
    const valid = mapServerNamingValidator(orgName);
    setNameValid(valid);
    if (!valid.valid) return;
    nextPage();
  };

  return (
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
          error={!nameValid.valid}
          helperText={nameValid.message}
          value={orgName}
          onChange={handleChangeOrgName}
        />
      </DialogContent>
      <DialogActions>
        <DialogActionsButton onClick={handleClickNextPage}>
          次へ
        </DialogActionsButton>
      </DialogActions>
    </>
  );
};

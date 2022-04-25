import React, { ChangeEvent, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';

export type ChangePasswordDialogProps = {
  open: boolean;
  onClose: () => void;
};
export const ChangePasswordDialog = ({
  open,
  onClose,
}: ChangePasswordDialogProps) => {
  const [prevPassword, setPrevPassword] = useState('');
  const handleChangePrevPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPrevPassword(e.target.value);
  };
  const [newPassword, setNewPassword] = useState('');
  const handleChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(e.target.value);
  };
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleChangeConfirmPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <Dialog maxWidth="xs" fullWidth open={open} onClose={onClose}>
      <DialogTitle>パスワード変更</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          type="password"
          size="small"
          label="現在のパスワード"
          value={prevPassword}
          onChange={handleChangePrevPassword}
        />
        <TextField
          type="password"
          size="small"
          label="新しいパスワード"
          value={newPassword}
          onChange={handleChangeNewPassword}
        />
        <TextField
          type="password"
          size="small"
          label="新しいパスワードを確認"
          value={confirmPassword}
          onChange={handleChangeConfirmPassword}
        />
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>
          閉じる
        </Button>
        <Button variant="contained">更新</Button>
      </DialogActions>
    </Dialog>
  );
};

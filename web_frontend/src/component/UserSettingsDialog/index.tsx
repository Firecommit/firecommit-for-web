import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import { useCurrentUser } from '../../hooks/useUserList';
import { ChangePasswordDialog } from './ChangePasswordDialog';
import { DialogTextField } from './DialogTextField';

export type UserSettingsDialogProps = {
  open: boolean;
  onClose: () => void;
};
export const UserSettingsDialog = ({
  open,
  onClose,
}: UserSettingsDialogProps) => {
  const [openChangePassword, setOpenChangePassword] = useState(false);
  const handleOpenChangePassword = () => setOpenChangePassword(true);
  const handleCloseChangePassword = () => setOpenChangePassword(false);
  const currentUser = useCurrentUser();
  console.log('currentUser:', currentUser);

  return (
    <>
      <Dialog maxWidth="sm" open={open} onClose={onClose} fullWidth>
        <DialogTitle sx={{ pb: 0 }}>ユーザ設定</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <DialogTextField
            label="ユーザ名"
            textFieldLabel="名前"
            value="hoge"
          />
          <DialogTextField
            label="メールアドレス"
            textFieldLabel="メールアドレス"
            value="fuga"
          />
          <Grid
            container
            flexDirection="column"
            alignItems="flex-start"
            gap={2}
          >
            <Divider flexItem />
            <Typography>パスワードを変更</Typography>
            <Button variant="contained" onClick={handleOpenChangePassword}>
              パスワードを変更する
            </Button>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined" onClick={onClose}>
            閉じる
          </Button>
          <Button variant="contained">更新</Button>
        </DialogActions>
      </Dialog>
      <ChangePasswordDialog
        open={openChangePassword}
        onClose={handleCloseChangePassword}
      />
    </>
  );
};

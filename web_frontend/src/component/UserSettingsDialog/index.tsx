import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
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
import { updateEmail, updateUserName, uploadIcon } from './api';
import { NotificationDispatchContext } from '../NotificationProvider';
import { UploadUserIcon } from './UploadUserIcon';

export type UserSettingsDialogProps = {
  open: boolean;
  onClose: () => void;
};
export const UserSettingsDialog = ({
  open,
  onClose,
}: UserSettingsDialogProps) => {
  const notificationDispatch = useContext(NotificationDispatchContext);
  const setSuccess = (message?: string) =>
    notificationDispatch({ type: 'SET_SUCCESS', message });
  const setError = (message?: string) =>
    notificationDispatch({ type: 'SET_ERROR', message });

  const [openChangePassword, setOpenChangePassword] = useState(false);
  const handleOpenChangePassword = () => setOpenChangePassword(true);
  const handleCloseChangePassword = () => setOpenChangePassword(false);
  const currentUser = useCurrentUser();

  const [userName, setUserName] = useState(currentUser?.name ?? '');
  const handleChangeUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  const [email, setEmail] = useState(currentUser?.email ?? '');
  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const [iconUrl, setIconUrl] = useState(currentUser?.photoURL);
  const [iconFile, setIconFile] = useState<File>();
  const handleChangeIcon = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    if (e.target.files.length === 0) return;
    setIconFile(e.target.files[0]);
  };

  useEffect(() => {
    if (currentUser === undefined) return;
    setUserName(currentUser.name ?? '');
    setEmail(currentUser.email ?? '');
    setIconUrl(currentUser?.photoURL ?? '');
  }, [currentUser]);

  const handleClickUpdate = async () => {
    if (currentUser === undefined) return;
    const promises: Array<Promise<any>> = [];
    try {
      if (userName !== currentUser.name) {
        promises.push(updateUserName(userName, currentUser.id));
      }
      if (email !== currentUser.email) {
        promises.push(updateEmail(email, currentUser.id));
      }
      if (iconFile) {
        promises.push(uploadIcon(iconFile, currentUser.id));
      }
      setSuccess('更新に成功しました');
      await Promise.all(promises);
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <>
      <Dialog maxWidth="sm" open={open} onClose={onClose} fullWidth>
        <DialogTitle sx={{ pb: 0 }}>ユーザ設定</DialogTitle>
        <DialogContent
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <UploadUserIcon
            iconUrl={iconFile ? URL.createObjectURL(iconFile) : iconUrl ?? ''}
            onChange={handleChangeIcon}
          />
          <DialogTextField
            label="ユーザ名"
            textFieldLabel="名前"
            value={userName}
            onChange={handleChangeUserName}
          />
          <DialogTextField
            label="メールアドレス"
            textFieldLabel="メールアドレス"
            value={email}
            onChange={handleChangeEmail}
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
          <Button variant="contained" onClick={handleClickUpdate}>
            更新
          </Button>
        </DialogActions>
      </Dialog>
      <ChangePasswordDialog
        open={openChangePassword}
        onClose={handleCloseChangePassword}
      />
    </>
  );
};

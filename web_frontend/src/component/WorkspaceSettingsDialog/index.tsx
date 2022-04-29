import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { DialogTextField } from '../UserSettingsDialog/DialogTextField';
import { updateWorkspaceName } from './api/workspaceName';
import { useGetMapServer } from '../../hooks/useMapServer';
import { NotificationDispatchContext } from '../NotificationProvider';
import { UploadIcon } from '../UploadIcon';
import { uploadIcon } from './api/uploadIcon';

export type WorkspaceSettingsDialogProps = {
  wid: string;
  open: boolean;
  onClose: () => void;
};
export const WorkspaceSettingsDialog = ({
  wid,
  open,
  onClose,
}: WorkspaceSettingsDialogProps) => {
  const notificationDispatch = useContext(NotificationDispatchContext);
  const setSuccess = (message?: string) =>
    notificationDispatch({ type: 'SET_SUCCESS', message });
  const setError = (message?: string) =>
    notificationDispatch({ type: 'SET_ERROR', message });

  const workspace = useGetMapServer(wid);
  const [workspaceName, setWorkspaceName] = useState('');
  const handleChangeWorkspaceName = (e: ChangeEvent<HTMLInputElement>) =>
    setWorkspaceName(e.target.value);
  const [workspaceIcon, setWorkspaceIcon] = useState<File>();
  const handleChangeIcon = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;
    if (e.target.files.length === 0) return;
    setWorkspaceIcon(e.target.files[0]);
  };

  useEffect(() => {
    if (workspace === undefined) return;
    setWorkspaceName(workspace.name);
  }, [workspace]);

  const handleClickUpdate = () => {
    if (workspace === undefined) return;
    try {
      if (workspaceName !== workspace.name) {
        updateWorkspaceName(workspaceName, wid);
      }
      if (workspaceIcon !== undefined) {
        uploadIcon(workspaceIcon, wid);
      }
      setSuccess('更新に成功しました');
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <Dialog fullWidth open={open} onClose={onClose}>
      <DialogTitle>ワークスペース設定</DialogTitle>
      <DialogContent>
        <UploadIcon
          label="ワークスペースアイコン"
          iconUrl={
            workspaceIcon
              ? URL.createObjectURL(workspaceIcon)
              : workspace?.iconURL ?? ''
          }
          onChange={handleChangeIcon}
        />
        <DialogTextField
          label="ワークスペース名"
          textFieldLabel="ワークスペース名"
          value={workspaceName}
          onChange={handleChangeWorkspaceName}
        />
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
  );
};

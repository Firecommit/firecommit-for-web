import React from 'react';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import {
  DialogActionsButton,
  DialogContentExplain,
  DialogDropzone,
  DialogTitleTypography,
  ProgressTypography,
} from '../DialogItems';

type Props = {
  onDrop: (acceptedFiles: any) => void;
};

export const UploadIconPresenter = ({ onDrop }: Props) => (
  <>
    <DialogTitle>
      <ProgressTypography>手順2/3</ProgressTypography>
      <DialogTitleTypography>
        サーバーのアイコンとなる画像をアップロードしてください。
      </DialogTitleTypography>
    </DialogTitle>
    <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
      <DialogContentExplain>
        アイコンを登録することでマップサーバーの役割、コンセプト、組織について直感的に理解しやすくなります。
      </DialogContentExplain>
      <DialogDropzone onDrop={onDrop} icon={<UploadFileIcon />} />
    </DialogContent>
    <DialogActions
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <DialogActionsButton variant="text" color="inherit">
        この手順をスキップする
      </DialogActionsButton>
      <DialogActionsButton>次へ</DialogActionsButton>
    </DialogActions>
  </>
);

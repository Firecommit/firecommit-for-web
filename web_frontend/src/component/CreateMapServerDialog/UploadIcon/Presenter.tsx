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

export type OuterProps = {
  nextPage: () => void;
};

export type Props = OuterProps & {
  onDrop: (acceptedFiles: any) => void;
};

export const UploadIconPresenter = ({ onDrop, nextPage }: Props) => (
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
      <DialogActionsButton variant="text" color="inherit" onClick={nextPage}>
        この手順をスキップする
      </DialogActionsButton>
      <DialogActionsButton onClick={nextPage}>次へ</DialogActionsButton>
    </DialogActions>
  </>
);

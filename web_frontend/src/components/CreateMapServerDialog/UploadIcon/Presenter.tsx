import React from 'react';
import {
  Box,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import {
  DialogActionsButton,
  DialogContentExplain,
  DialogTitleTypography,
  ProgressTypography,
} from '../DialogItems';

type Props = {
  getRootProps: any;
  getInputProps: any;
  isDragActive: boolean;
};

export const UploadIconPresenter = ({
  getRootProps,
  getInputProps,
  isDragActive,
}: Props) => (
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
      <Box
        {...getRootProps()}
        sx={{
          position: 'relative',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'dashed 1px ',
          cursor: isDragActive ? 'copy' : 'pointer',
          backgroundColor: isDragActive ? 'black' : 'white',
          opacity: isDragActive ? 0.3 : 1,
        }}
      >
        <Typography
          sx={{
            position: 'absolute',
            top: '20%',
            display: isDragActive ? 'inline' : 'none',
            color: 'white',
          }}
        >
          ここにドラッグアンドドロップ
        </Typography>
        <input {...getInputProps()} />
        <UploadFileIcon
          sx={{
            color: grey[500],
            height: 'auto',
            width: '7%',
            padding: 2,
            borderRadius: '50%',
            border: 'dashed 1px ',
          }}
        />
      </Box>
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

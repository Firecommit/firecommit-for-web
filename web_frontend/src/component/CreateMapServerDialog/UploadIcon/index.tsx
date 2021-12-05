import React, { useCallback } from 'react';
import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import {
  DialogActionsButton,
  DialogContentExplain,
  DialogDropzone,
  DialogTitleTypography,
  ProgressTypography,
} from '../DialogItems';
import { ImagePreviewList } from '../../ImagePreviewList';

export type Props = {
  nextPage: () => void;
  icon?: File;
  setIcon: (file: File | undefined) => void;
};

export const UploadIcon = ({ nextPage, icon, setIcon }: Props) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setIcon(acceptedFiles[0]);
    },
    [setIcon]
  );

  return (
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
        {icon && (
          <ImagePreviewList
            imageList={[
              {
                imageUrl: window.URL.createObjectURL(icon),
                label: 'アイコン',
                onDelete: () => setIcon(undefined),
              },
            ]}
          />
        )}
        <DialogDropzone
          onDrop={onDrop}
          maxFiles={1}
          icon={<UploadFileIcon />}
        />
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
};

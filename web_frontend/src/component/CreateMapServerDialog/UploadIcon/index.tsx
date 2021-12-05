import React, { useCallback, useState } from 'react';
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { pink } from '@mui/material/colors';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import {
  DialogActionsButton,
  DialogContentExplain,
  DialogDropzone,
  DialogTitleTypography,
  ProgressTypography,
} from '../DialogItems';
import { ImagePreviewList } from '../../ImagePreviewList';
import { Valid, iconValidator } from './validator';

export type Props = {
  nextPage: () => void;
  icon?: File;
  setIcon: (file: File | undefined) => void;
};

export const UploadIcon = ({ nextPage, icon, setIcon }: Props) => {
  const [iconValid, setIconValid] = useState<Valid>({ valid: true });
  const onDrop = useCallback(
    (acceptedFiles) => {
      const valid = iconValidator(acceptedFiles[0]);
      setIconValid(valid);
      if (!valid.valid) return;
      setIcon(acceptedFiles[0]);
    },
    [setIcon]
  );
  const handleClickNext = () => {
    const valid = iconValidator(icon);
    setIconValid(valid);
    if (valid.valid) nextPage();
  };
  const handleClickSkip = () => {
    setIcon(undefined);
    nextPage();
  };

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
        <Typography
          variant="caption"
          sx={{
            display: iconValid.valid ? 'none' : 'inherit',
            color: pink[500],
          }}
        >
          {iconValid.message}
        </Typography>
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
        <DialogActionsButton
          variant="text"
          color="inherit"
          onClick={handleClickSkip}
        >
          この手順をスキップする
        </DialogActionsButton>
        <DialogActionsButton onClick={handleClickNext}>
          次へ
        </DialogActionsButton>
      </DialogActions>
    </>
  );
};

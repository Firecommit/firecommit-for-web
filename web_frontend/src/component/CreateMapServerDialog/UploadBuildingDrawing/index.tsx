import React, { useCallback } from 'react';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import {
  ProgressTypography,
  DialogTitleTypography,
  DialogContentExplain,
  DialogActionsButton,
  DialogDropzone,
} from '../DialogItems';

export type Props = {
  setBuildingDrawing: (files: Array<File>) => void;
  handleClickComplete: () => void;
};

export const UploadBuildingDrawing = ({
  setBuildingDrawing,
  handleClickComplete,
}: Props) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setBuildingDrawing(acceptedFiles);
    },
    [setBuildingDrawing]
  );

  return (
    <>
      <DialogTitle>
        <ProgressTypography>手順3/3</ProgressTypography>
        <DialogTitleTypography>
          インドアマップを作成するために建物の平面図をアップロードしてください。
        </DialogTitleTypography>
      </DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <DialogContentExplain>
          アップロードされた平面図をもとにFIRECOMMITはインドアマップを作成します。施工完了後に受け取った平面図のデータなどをpdf、jpg、pngなどのファイル形式で取り込んでください。
        </DialogContentExplain>
        <DialogDropzone onDrop={onDrop} icon={<UploadFileIcon />} />
      </DialogContent>
      <DialogActions>
        <DialogActionsButton onClick={handleClickComplete}>
          完了
        </DialogActionsButton>
      </DialogActions>
    </>
  );
};

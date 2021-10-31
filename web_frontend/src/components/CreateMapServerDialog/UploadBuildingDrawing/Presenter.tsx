import React from 'react';
import { DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { UploadFile as UploadFileIcon } from '@mui/icons-material';
import {
  ProgressTypography,
  DialogTitleTypography,
  DialogContentExplain,
  DialogActionsButton,
  DialogDropzone,
} from '../DialogItems';

type Props = {
  onDrop: (acceptedFiles: any) => void;
};

export const UploadBuildingDrawingPresenter = ({ onDrop }: Props) => (
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
      <DialogActionsButton>完了</DialogActionsButton>
    </DialogActions>
  </>
);

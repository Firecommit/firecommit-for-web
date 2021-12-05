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
import { ImagePreviewList } from '../../ImagePreviewList';

export type Props = {
  buildingDrawing: Array<File>;
  setBuildingDrawing: (files: Array<File>) => void;
  handleClickComplete: () => void;
};

export const UploadBuildingDrawing = ({
  buildingDrawing,
  setBuildingDrawing,
  handleClickComplete,
}: Props) => {
  const onDrop = (acceptedFiles: Array<File>) => {
    setBuildingDrawing([...buildingDrawing, ...acceptedFiles]);
  };
  const imageList = buildingDrawing.map((elm, index) => ({
    label: `${index + 1}F`,
    imageUrl: window.URL.createObjectURL(elm),
    onDelete: () => {
      setBuildingDrawing([
        ...buildingDrawing.slice(0, index),
        ...buildingDrawing.slice(index + 1),
      ]);
    },
  }));

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
        <DialogDropzone
          onDrop={onDrop}
          icon={<UploadFileIcon />}
          dropzoneText={`${buildingDrawing.length + 1}Fの画像を追加`}
        />
        <ImagePreviewList imageList={imageList} />
      </DialogContent>
      <DialogActions>
        <DialogActionsButton onClick={handleClickComplete}>
          完了
        </DialogActionsButton>
      </DialogActions>
    </>
  );
};

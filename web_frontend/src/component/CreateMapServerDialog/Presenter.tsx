import React, { ChangeEvent } from 'react';
import { Box, Dialog } from '@mui/material';
import { MapServerNaming } from './MapServerNaming';
import { UploadIcon } from './UploadIcon';
import { UploadBuildingDrawing } from './UploadBuildingDrawing';

export type OuterProps = {
  page: number;
};

export type Props = OuterProps & {
  nextPage: () => void;
  handleChangeOrgName: (e: ChangeEvent<HTMLInputElement>) => void;
  setIcon: (file: File) => void;
  buildingDrawing: Array<File>;
  setBuildingDrawing: (files: Array<File>) => void;
  handleClickCreateMapServer: () => void;
};

export const CreateMapServerDialogPresenter = ({
  page,
  nextPage,
  handleChangeOrgName,
  setIcon,
  buildingDrawing,
  setBuildingDrawing,
  handleClickCreateMapServer,
}: Props) => {
  const flow = [
    <MapServerNaming
      nextPage={nextPage}
      handleChangeOrgName={handleChangeOrgName}
    />,
    <UploadIcon nextPage={nextPage} setIcon={setIcon} />,
    <UploadBuildingDrawing
      buildingDrawing={buildingDrawing}
      setBuildingDrawing={setBuildingDrawing}
      handleClickComplete={handleClickCreateMapServer}
    />,
  ];

  return (
    <Dialog open fullWidth>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '568px',
        }}
      >
        {flow[page - 1]}
      </Box>
    </Dialog>
  );
};

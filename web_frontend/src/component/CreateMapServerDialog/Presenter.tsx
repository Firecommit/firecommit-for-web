import React, { ChangeEvent } from 'react';
import { Box, Dialog } from '@mui/material';
import { MapServerNaming } from './MapServerNaming';
import { UploadIcon } from './UploadIcon';
import { UploadBuildingDrawing } from './UploadBuildingDrawing';
import { LoadingDialog } from '../LoadingDialog';

export type OuterProps = {
  page: number;
};

export type Props = OuterProps & {
  loading: boolean;
  nextPage: () => void;
  prevPage: () => void;
  orgName: string;
  handleChangeOrgName: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: File;
  setIcon: (file: File | undefined) => void;
  buildingDrawing: Array<File>;
  setBuildingDrawing: (files: Array<File>) => void;
  handleClickCreateMapServer: () => void;
};

export const CreateMapServerDialogPresenter = ({
  loading,
  page,
  orgName,
  nextPage,
  prevPage,
  handleChangeOrgName,
  icon,
  setIcon,
  buildingDrawing,
  setBuildingDrawing,
  handleClickCreateMapServer,
}: Props) => {
  const flow = [
    <MapServerNaming
      nextPage={nextPage}
      orgName={orgName}
      handleChangeOrgName={handleChangeOrgName}
    />,
    <UploadIcon
      nextPage={nextPage}
      prevPage={prevPage}
      icon={icon}
      setIcon={setIcon}
    />,
    <UploadBuildingDrawing
      prevPage={prevPage}
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
        {loading ? <LoadingDialog /> : flow[page - 1]}
      </Box>
    </Dialog>
  );
};

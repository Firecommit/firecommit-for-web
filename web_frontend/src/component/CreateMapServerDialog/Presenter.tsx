import React from 'react';
import { Box, Dialog } from '@mui/material';
import { MapServerNaming } from './MapServerNaming';
import { UploadIcon } from './UploadIcon';
import { UploadBuildingDrawing } from './UploadBuildingDrawing';

export type OuterProps = {
  page: number;
};

export type Props = OuterProps & {
  nextPage: () => void;
};

export const CreateMapServerDialogPresenter = ({ page, nextPage }: Props) => {
  const flow = [
    <MapServerNaming nextPage={nextPage} />,
    <UploadIcon nextPage={nextPage} />,
    <UploadBuildingDrawing />,
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

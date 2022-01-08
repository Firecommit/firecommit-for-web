import React, { ChangeEvent, useState } from 'react';
import { Box, Fab } from '@mui/material';
import {
  Layers as LayersIcon,
  MyLocation as MyLocationIcon,
  LocationSearching as LocationSearchingIcon,
} from '@mui/icons-material';
import { useParams } from 'react-router';
import { MapCanvas } from '../../component/MapCanvas';
import { theme } from '../../theme/theme';
import { SelectLayerDialog } from '../../component/SelectLayerDialog';
import { useGetMapServer } from '../../hooks/useMapServer';

export const WorkSpaceScreen = () => {
  const { wid } = useParams<{ wid: string }>();

  const [open, setOpen] = useState(false);
  const handleOpenLayerDialog = () => setOpen(true);
  const handleCloseLayerDialog = () => setOpen(false);
  const [isTracking, setIsTracking] = useState(true);
  const handleToggleIsTracking = () => {
    setIsTracking(!isTracking);
  };
  const [layer, setLayer] = useState(1);
  const handleChangeLayer = (e: ChangeEvent<HTMLInputElement>) => {
    setIsTracking(false);
    setLayer(parseInt(e.target.value, 10));
  };

  const mapServer = useGetMapServer(wid);
  const layerList = Object.keys(mapServer?.maps ?? {}).map((key) =>
    parseInt(key.slice(5), 10)
  );

  return (
    <>
      <MapCanvas
        wid={wid}
        isTracking={isTracking}
        setIsTracking={setIsTracking}
        layer={layer}
        setLayer={setLayer}
        mapServer={mapServer}
      />
      <SelectLayerDialog
        open={open}
        onClose={handleCloseLayerDialog}
        layer={layer}
        onChangeLayer={handleChangeLayer}
        layerList={layerList}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          position: 'fixed',
          right: 16,
          bottom: 16,
        }}
      >
        <Fab
          onClick={handleOpenLayerDialog}
          sx={{
            color: theme.palette.primary.main,
            backgroundColor: 'white',
          }}
        >
          <LayersIcon />
        </Fab>
        <Fab
          onClick={handleToggleIsTracking}
          sx={{
            color: theme.palette.primary.main,
            backgroundColor: 'white',
          }}
        >
          {isTracking ? <MyLocationIcon /> : <LocationSearchingIcon />}
        </Fab>
      </Box>
    </>
  );
};

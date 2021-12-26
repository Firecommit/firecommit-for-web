/* eslint-disable */
import React, { ChangeEvent, useState } from 'react';
import { Fab } from '@mui/material';
import { Layers as LayersIcon } from '@mui/icons-material';
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
  const [layer, setLayer] = useState(1);
  const handleChangeLayer = (e: ChangeEvent<HTMLInputElement>) =>
    setLayer(parseInt(e.target.value, 10));

  const mapServer = useGetMapServer(wid);
  const layerList = Object.keys(mapServer?.maps ?? {}).map((key) =>
    parseInt(key.slice(5), 10)
  );

  return (
    <>
      <MapCanvas wid={wid} layer={layer} mapServer={mapServer} />
      <SelectLayerDialog
        open={open}
        onClose={handleCloseLayerDialog}
        layer={layer}
        onChangeLayer={handleChangeLayer}
        layerList={layerList}
      />
      <Fab
        onClick={handleOpenLayerDialog}
        sx={{
          position: 'fixed',
          right: 16,
          bottom: 16,
          color: theme.palette.primary.main,
          backgroundColor: 'white',
        }}
      >
        <LayersIcon />
      </Fab>
    </>
  );
};

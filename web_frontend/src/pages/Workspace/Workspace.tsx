import React from 'react';
import { useParams } from 'react-router';
import { Box } from '@mui/system';
import { useGetMapServer } from '../../hooks/useMapServer';
import { Canvas } from '../../component/Canvas';

export const WorkSpaceScreen = () => {
  const { wid } = useParams<{ wid: string }>();
  const mapServer = useGetMapServer(wid);
  console.log('mapServer:', mapServer);

  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <Canvas
        canvasImage={mapServer?.maps.layer1 ?? ''}
        position={{ x: 0, y: 0 }}
        maxOffset={{ x: 1000, y: 1000 }}
        minOffset={{ x: -1000, y: -1000 }}
        canvasChildren={[]}
      />
    </Box>
  );
};

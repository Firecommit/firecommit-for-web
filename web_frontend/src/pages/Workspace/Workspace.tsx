import React from 'react';
import { useParams } from 'react-router';
import { Box } from '@mui/system';
import { useGetMapServer } from '../../hooks/useMapServer';
import { Canvas } from '../../component/Canvas';
import { UserIcon } from '../../component/UserIcon';

export const WorkSpaceScreen = () => {
  const { wid } = useParams<{ wid: string }>();
  const mapServer = useGetMapServer(wid);
  console.log('mapServer:', mapServer);

  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <Canvas
        canvasImage={mapServer?.maps.layer1 ?? ''}
        position={{ x: 300, y: 300 }}
        maxOffset={{ x: 1000, y: 1000 }}
        minOffset={{ x: -1000, y: -1000 }}
        canvasChildren={[
          {
            child: <UserIcon currentUser />,
            key: 'hoge',
            height: 48,
            width: 48,
            rotate: 90,
            position: { x: 200, y: 200 },
          },
        ]}
      />
    </Box>
  );
};

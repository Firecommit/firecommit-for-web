import React, { useContext } from 'react';
import { Box } from '@mui/system';
import { useUserList } from '../hooks/useUserList';
import { Canvas } from './Canvas';
import { UserIcon } from './UserIcon';
import { AuthContext } from './AuthProvider';
import { MapServer } from '../types/MapServer';

type MapCanvasProps = {
  wid: string;
  layer: number;
  mapServer: MapServer | undefined;
};
export const MapCanvas = ({ wid, layer, mapServer }: MapCanvasProps) => {
  const position = React.useMemo(() => ({ x: 200, y: 300 }), []);

  const userList = useUserList(wid, layer);

  const currentUser = useContext(AuthContext);

  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <Canvas
        canvasImage={mapServer?.maps[`layer${layer}`] ?? ''}
        position={position}
        maxOffset={{ x: 1000, y: 1000 }}
        minOffset={{ x: -1000, y: -1000 }}
        canvasChildren={userList.map((elm) => {
          const isCurrentUser = currentUser.currentUser?.uid === elm.id;
          return {
            child: <UserIcon currentUser={isCurrentUser} />,
            key: elm.id,
            height: isCurrentUser ? 48 : 40,
            width: isCurrentUser ? 48 : 40,
            rotate: 0,
            position: {
              x: elm.coordinate.x,
              y: elm.coordinate.y,
            },
          };
        })}
      />
    </Box>
  );
};

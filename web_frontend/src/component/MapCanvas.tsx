import React, { useEffect, useState } from 'react';
import { Box } from '@mui/system';
import { useCurrentUser, useUserList } from '../hooks/useUserList';
import { Canvas } from './Canvas';
import { UserIcon } from './UserIcon';
import { MapServer } from '../types/MapServer';

type MapCanvasProps = {
  wid: string;
  isTracking: boolean;
  setIsTracking: (isTracking: boolean) => void;
  layer: number;
  setLayer: (l: number) => void;
  mapServer: MapServer | undefined;
};
export const MapCanvas = ({
  wid,
  isTracking,
  setIsTracking,
  layer,
  setLayer,
  mapServer,
}: MapCanvasProps) => {
  const userList = useUserList(wid, layer);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [forcePositionUpdate, setForcePositionUpdate] = useState(false);

  const currentUser = useCurrentUser();
  useEffect(() => {
    if (!isTracking) return;
    const l = Object.entries(currentUser?.layer ?? {}).find(
      ([, value]) => value
    ) ?? [`${layer}`];
    setLayer(parseInt(l[0] ?? `${layer}`, 10));
    setPosition(currentUser?.coordinate ?? { x: 0, y: 0 });
    setForcePositionUpdate(!forcePositionUpdate);
  }, [
    currentUser,
    setLayer,
    layer,
    isTracking,
    forcePositionUpdate,
    setForcePositionUpdate,
  ]);

  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <Canvas
        canvasImage={mapServer?.maps[`layer${layer}`] ?? ''}
        position={position}
        maxOffset={{ x: 1000, y: 1000 }}
        minOffset={{ x: -1000, y: -1000 }}
        setIsTracking={setIsTracking}
        forcePositionUpdate={forcePositionUpdate}
        canvasChildren={userList.map((elm) => {
          const isCurrentUser = currentUser?.id === elm.id;
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

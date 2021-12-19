import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { Box } from '@mui/system';
import { useGetMapServer } from '../../hooks/useMapServer';
import { Canvas } from '../../component/Canvas';
import { UserIcon } from '../../component/UserIcon';
import { useUserList } from '../../hooks/useUserList';
import { AuthContext } from '../../component/AuthProvider';

export const WorkSpaceScreen = () => {
  const position = React.useMemo(() => ({ x: 200, y: 300 }), []);

  const { wid } = useParams<{ wid: string }>();
  const mapServer = useGetMapServer(wid);
  const userList = useUserList(wid, 1);

  const currentUser = useContext(AuthContext);

  return (
    <Box sx={{ height: '100vh', width: '100vw' }}>
      <Canvas
        canvasImage={mapServer?.maps.layer1 ?? ''}
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

import React from 'react';
import { Box, CircularProgress, List } from '@mui/material';
import { SxProps } from '@mui/system';
import { MapServerListItem } from './MapServerListItem';
import { useGetMapServerList } from '../../hooks/useGetMapServerList';
import { MapServer } from '../../types/MapServer';

type Props = { sx?: SxProps };
export const MapServerList = ({ sx }: Props) => {
  const mapServerList: Array<MapServer> = useGetMapServerList();

  if (!mapServerList.length)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <CircularProgress sx={{ '.MuiCircularProgress-svg': { m: 0 } }} />
      </Box>
    );

  return (
    <List sx={{ height: '100%', overflow: 'scroll', ...sx }}>
      {mapServerList.map((elm) => (
        <MapServerListItem
          key={elm.id}
          id={elm.id}
          name={elm.name}
          iconURL={elm.iconURL}
        />
      ))}
    </List>
  );
};
MapServerList.defaultProps = { sx: {} };

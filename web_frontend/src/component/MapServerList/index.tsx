import React from 'react';
import { List } from '@mui/material';
import { SxProps } from '@mui/system';
import { MapServerListItem } from './MapServerListItem';

type Props = { sx?: SxProps };
export const MapServerList = ({ sx }: Props) => (
  <List sx={{ height: '100%', overflow: 'scroll', ...sx }}>
    {Array(10)
      .fill(0)
      .map(() => (
        <MapServerListItem
          id="hoge"
          name="ほげほげ"
          iconURL="https://firebasestorage.googleapis.com/v0/b/firecommit-1e1d5.appspot.com/o/icons%2FgDezyQ78QajSGB3W8zY8x.png?alt=media&token=e8f1ae91-c93e-4e79-af89-4cd9ffe38d1b"
        />
      ))}
  </List>
);
MapServerList.defaultProps = { sx: {} };

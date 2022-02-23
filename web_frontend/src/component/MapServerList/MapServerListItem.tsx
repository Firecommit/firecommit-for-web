import React from 'react';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';
import { MapServer } from '../../types/MapServer';

type Props = {
  id: MapServer['id'];
  name: MapServer['name'];
  iconURL: MapServer['iconURL'];
};
export const MapServerListItem = ({ id, name, iconURL }: Props) => (
  <ListItem
    button
    component={Link}
    to={`/workspace/${id}`}
    sx={{ m: 0, maxHeight: 64 }}
  >
    <ListItemAvatar>
      <Avatar alt="icon" src={iconURL} sx={{ height: 32, width: 32 }} />
    </ListItemAvatar>
    <ListItemText primary={name} />
  </ListItem>
);

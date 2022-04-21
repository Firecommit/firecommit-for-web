import React from 'react';
import { Grid, ListItem, ListItemIcon, ListItemText } from '@mui/material';

export type MapServerNameProps = {
  mapServerName: string;
  iconURL: string;
};
export const MapServerName = ({
  mapServerName,
  iconURL,
}: MapServerNameProps) => (
  <ListItem>
    <Grid component={ListItemIcon} xs={1}>
      <img src={iconURL} alt="icon" style={{ width: '80%', height: 'auto' }} />
    </Grid>
    <Grid
      component={ListItemText}
      primary={mapServerName}
      xs={11}
      primaryTypographyProps={{
        sx: { fontSize: '20px' },
      }}
    />
  </ListItem>
);

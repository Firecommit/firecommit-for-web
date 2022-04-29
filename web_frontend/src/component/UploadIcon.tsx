import React, { ChangeEvent } from 'react';
import { Avatar, Divider, Grid, Typography } from '@mui/material';

export type UploadUserIconProps = {
  label: string;
  iconUrl: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const UploadIcon = ({
  label,
  iconUrl,
  onChange,
}: UploadUserIconProps) => (
  <Grid container flexDirection="column" alignItems="flex-start" gap={1}>
    <Divider flexItem />
    <Typography>{label}</Typography>
    <input
      type="file"
      accept="image/*"
      onChange={onChange}
      id="user-icon"
      style={{ display: 'none' }}
    />
    <Avatar
      component="label"
      htmlFor="user-icon"
      src={iconUrl}
      alt="icon"
      sx={{ cursor: 'pointer' }}
    />
  </Grid>
);

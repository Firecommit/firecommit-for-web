import React, { ChangeEvent } from 'react';
import { Avatar, Divider, Grid, Typography } from '@mui/material';

export type UploadUserIconProps = {
  iconUrl: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};
export const UploadUserIcon = ({ iconUrl, onChange }: UploadUserIconProps) => (
  <Grid container flexDirection="column" alignItems="flex-start" gap={1}>
    <Divider flexItem />
    <Typography>ユーザアイコン</Typography>
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

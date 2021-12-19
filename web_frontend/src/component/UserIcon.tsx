import React from 'react';
import { Box, SxProps } from '@mui/system';
import User from '../resources/user.svg';
import CurrentUser from '../resources/currentUser.svg';

export type Props = {
  currentUser?: boolean;
  sx?: SxProps;
};

export const UserIcon = ({ currentUser, sx }: Props) => {
  const icon = currentUser ? CurrentUser : User;
  const size = currentUser ? 48 : 40;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      <img src={icon} alt="user icon" style={{ height: size }} />
    </Box>
  );
};

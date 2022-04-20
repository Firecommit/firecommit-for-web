import React, { ReactNode, useState } from 'react';
import { Fab } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { theme } from '../theme/theme';
import { Sidebar } from './Sidebar';

export type WorkSpaceLayoutProps = {
  children: ReactNode;
  wid: string;
};
export const WorkSpaceLayout = ({ children, wid }: WorkSpaceLayoutProps) => {
  const [open, setOpen] = useState(false);
  const handleToggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Sidebar open={open} wid={wid} />
      {children}
      <Fab
        color="primary"
        size="medium"
        onClick={handleToggleOpen}
        aria-label="toggle-sidebar"
        sx={{
          position: 'fixed',
          top: 32,
          right: 32,
          color: theme.palette.primary.main,
          backgroundColor: 'white',
        }}
      >
        <MenuIcon />
      </Fab>
    </>
  );
};

import React, { ReactNode } from 'react';
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItemButtonProps,
} from '@mui/material';

export type SidebarListItemProps = {
  title: string;
  icon: ReactNode;
  onClick?: ListItemButtonProps['onClick'];
};
export const SidebarListItem = ({
  title,
  icon,
  onClick,
}: SidebarListItemProps) => (
  <ListItem>
    <ListItemButton onClick={onClick}>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={title} />
    </ListItemButton>
  </ListItem>
);

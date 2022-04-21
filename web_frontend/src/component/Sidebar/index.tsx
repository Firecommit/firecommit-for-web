import React from 'react';
import {
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useGetMapServer } from '../../hooks/useMapServer';
import { SidebarListItem, SidebarListItemProps } from './SidebarListItem';

export type SidebarProps = {
  open: boolean;
  wid: string;
};
export const Sidebar = ({ open, wid }: SidebarProps) => {
  const mapServer = useGetMapServer(wid);
  const list: Array<SidebarListItemProps> = [
    {
      title: '招待コードを表示',
      icon: <PersonAddIcon />,
      onClick() {
        console.log('招待');
      },
    },
  ];

  return (
    <Drawer
      variant="persistent"
      open={open}
      sx={{
        '& .MuiDrawer-paper': {
          boxShadow: '-1px 0px 3px',
        },
      }}
    >
      <List sx={{ minWidth: '240px' }}>
        <ListItem>
          <Grid component={ListItemIcon} xs={1}>
            <img
              src={mapServer?.iconURL}
              alt="icon"
              style={{ width: '80%', height: 'auto' }}
            />
          </Grid>
          <Grid
            component={ListItemText}
            primary={mapServer?.name}
            xs={11}
            primaryTypographyProps={{
              sx: { fontSize: '20px' },
            }}
          />
        </ListItem>
        <Divider />
        {list.map((item) => (
          <SidebarListItem {...item} />
        ))}
      </List>
    </Drawer>
  );
};

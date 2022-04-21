import React from 'react';
import { Divider, Drawer, List } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { useGetMapServer } from '../../hooks/useMapServer';
import { SidebarListItem, SidebarListItemProps } from './SidebarListItem';
import { MapServerName } from './MapServerName';

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
        <MapServerName
          mapServerName={mapServer?.name ?? ''}
          iconURL={mapServer?.iconURL ?? ''}
        />
        <Divider />
        {list.map((item) => (
          <SidebarListItem {...item} />
        ))}
      </List>
    </Drawer>
  );
};

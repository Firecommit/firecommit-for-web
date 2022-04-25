import React, { useState } from 'react';
import { Divider, Drawer, List } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
import { useGetMapServer } from '../../hooks/useMapServer';
import { SidebarListItem, SidebarListItemProps } from './SidebarListItem';
import { MapServerName } from './MapServerName';
import { MapServerIdDialog } from '../MapServerIdDialog';
import { UserSettingsDialog } from '../UserSettingsDialog';

export type SidebarProps = {
  open: boolean;
  wid: string;
};
export const Sidebar = ({ open, wid }: SidebarProps) => {
  const [openMapServerIdDialog, setOpenMapServerIdDialog] = useState(false);
  const handleCLoseMapServerIdDialog = () => setOpenMapServerIdDialog(false);
  const [openUserSettingsDialog, setOpenUserSettingsDialog] = useState(false);
  const handleCloseUserSettingsDialog = () => setOpenUserSettingsDialog(false);
  const mapServer = useGetMapServer(wid);
  const list: Array<SidebarListItemProps> = [
    {
      title: 'マップサーバーIDを表示',
      icon: <PersonAddIcon />,
      onClick() {
        setOpenMapServerIdDialog(true);
      },
    },
    {
      title: 'ユーザ設定',
      icon: <SettingsIcon />,
      onClick() {
        setOpenUserSettingsDialog(true);
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
      <MapServerIdDialog
        wid={wid}
        open={openMapServerIdDialog}
        onClose={handleCLoseMapServerIdDialog}
      />
      <UserSettingsDialog
        open={openUserSettingsDialog}
        onClose={handleCloseUserSettingsDialog}
      />
    </Drawer>
  );
};

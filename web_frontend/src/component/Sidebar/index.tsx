import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

export const Sidebar = () => {
  const list: Array<{ title: string }> = [];

  return (
    <Drawer variant="permanent" open>
      <List
        sx={{
          minWidth: '240px',
        }}
      >
        {list.map((item) => (
          <ListItem>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

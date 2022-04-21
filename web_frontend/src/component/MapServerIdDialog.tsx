import React, { FocusEvent, useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Popover,
  TextField,
  Typography,
} from '@mui/material';

export type MapServerIdDialogProps = {
  wid: string;
  open: boolean;
  onClose: () => void;
};
export const MapServerIdDialog = ({
  wid,
  open,
  onClose,
}: MapServerIdDialogProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement>();
  const [openPopover, setOpenPopover] = useState(false);
  const handleClosePopover = () => {
    setOpenPopover(false);
  };
  const handleClick = () => {
    setOpenPopover(true);
  };
  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    navigator.clipboard.writeText(wid);
    setAnchorEl(e.target);
  };

  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={onClose}>
      <DialogTitle>ワークスペースID</DialogTitle>
      <DialogContent>
        <Popover
          open={openPopover}
          onClose={handleClosePopover}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Typography sx={{ p: 2 }}>
            ワークスペースIDをコピーしました
          </Typography>
        </Popover>
        <TextField
          fullWidth
          value={wid}
          onClick={handleClick}
          onFocus={handleFocus}
          InputProps={{ readOnly: true }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>閉じる</Button>
      </DialogActions>
    </Dialog>
  );
};

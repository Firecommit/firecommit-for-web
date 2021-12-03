import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

export type ImageDialogProps = {
  open: boolean;
  imageUrl: string;
  onClose: () => void;
};
export const ImageDialog = ({ open, imageUrl, onClose }: ImageDialogProps) => (
  <Dialog
    open={open}
    onClose={onClose}
    sx={{ '& .MuiDialog-paper': { backgroundColor: 'transparent' } }}
  >
    <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end' }} />
    <DialogContent
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img src={imageUrl} alt={imageUrl} />
    </DialogContent>
  </Dialog>
);

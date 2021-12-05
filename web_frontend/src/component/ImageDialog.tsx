import React from 'react';
import { Dialog, DialogContent } from '@mui/material';

export type ImageDialogProps = {
  open: boolean;
  imageUrl: string;
  onClose: () => void;
};
export const ImageDialog = ({ open, imageUrl, onClose }: ImageDialogProps) => (
  <Dialog
    open={open}
    maxWidth="xl"
    fullWidth
    onClose={onClose}
    sx={{ '& .MuiDialog-paper': { backgroundColor: 'transparent' } }}
  >
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

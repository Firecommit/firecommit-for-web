import React, { useState } from 'react';
import { Button } from '@mui/material';
import { SxProps } from '@mui/system';
import { ImageDialog } from './ImageDialog';

export type ImagePreviewProps = { imageUrl: string; sx?: SxProps };
export const ImagePreview = ({ imageUrl }: ImagePreviewProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button onClick={handleOpen}>
        <img src={imageUrl} alt={imageUrl} width="50" height="50" />
      </Button>
      <ImageDialog open={open} onClose={handleClose} imageUrl={imageUrl} />
    </>
  );
};

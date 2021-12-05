import React from 'react';
import { Box, IconButton, List, ListItem, Typography } from '@mui/material';
import { pink } from '@mui/material/colors';
import { Clear as ClearIcon } from '@mui/icons-material';
import { ImagePreview, ImagePreviewProps } from './ImagePreview';

type ImageListItem = {
  imageUrl: ImagePreviewProps['imageUrl'];
  label: string;
  onDelete?: () => void;
};

export type ImagePreviewListProps = {
  imageList: Array<ImageListItem>;
};
export const ImagePreviewList = ({ imageList }: ImagePreviewListProps) => (
  <List>
    {imageList.map(({ label, imageUrl, onDelete }) => (
      <ListItem key={imageUrl} sx={{ justifyContent: 'center' }}>
        <Typography>{label}</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', flexGrow: 1 }}>
          <ImagePreview imageUrl={imageUrl} />
        </Box>
        <IconButton
          sx={{ visibility: onDelete ? 'inherit' : 'hidden', color: pink[500] }}
          onClick={onDelete}
        >
          <ClearIcon />
        </IconButton>
      </ListItem>
    ))}
  </List>
);

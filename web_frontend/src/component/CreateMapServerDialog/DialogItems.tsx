import React from 'react';
import {
  Box,
  Button,
  ButtonProps,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useDropzone } from 'react-dropzone';

export const ProgressTypography = ({
  sx,
  ...props
}: Omit<TypographyProps, 'variant'>) => (
  <Typography
    variant="subtitle2"
    sx={{
      marginBottom: 2,
      color: grey[500],
      ...sx,
    }}
    {...props}
  />
);

export const DialogTitleTypography = ({ sx, ...props }: TypographyProps) => (
  <Typography
    sx={{
      fontSize: '24px',
      fontWeight: 'bold',
      ...sx,
    }}
    {...props}
  />
);

export const DialogContentExplain = ({
  sx,
  ...props
}: Omit<TypographyProps, 'variant'>) => (
  <Typography
    variant="body2"
    sx={{
      marginBottom: 2,
      ...sx,
    }}
    {...props}
  />
);

export const DialogContentTextField = (props: Omit<TextFieldProps, 'size'>) => (
  <TextField size="small" {...props} />
);

export const DialogActionsButton = ({
  variant,
  size,
  ...props
}: ButtonProps) => (
  <Button
    variant={variant ?? 'contained'}
    size={size ?? 'large'}
    sx={{
      minWidth: '152px',
    }}
    {...props}
  />
);

export const DialogDropzone = ({
  onDrop,
  maxFiles,
  icon: iconProp,
  isDragText,
  dropzoneText,
}: {
  onDrop: (acceptedFiles: any) => void;
  maxFiles?: number;
  icon: React.ReactElement;
  isDragText?: string;
  dropzoneText?: string;
}) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles,
    accept: 'image/jpeg, image/png',
  });
  const icon = React.cloneElement(iconProp, {
    sx: {
      color: grey[500],
      height: 'auto',
      width: '7%',
      padding: 2,
      borderRadius: '50%',
      border: 'dashed 1px ',
    },
  });

  return (
    <Box
      {...getRootProps()}
      sx={{
        position: 'relative',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: 'dashed 1px ',
        cursor: isDragActive ? 'copy' : 'pointer',
        backgroundColor: isDragActive ? 'black' : 'white',
        opacity: isDragActive ? 0.3 : 1,
      }}
    >
      <Typography
        sx={{
          position: 'absolute',
          top: '20%',
          display: isDragActive ? 'inline' : 'none',
          color: 'white',
        }}
      >
        {isDragText}
      </Typography>
      <input {...getInputProps()} />
      {dropzoneText}
      {icon}
    </Box>
  );
};

DialogDropzone.defaultProps = {
  isDragText: 'ここにドラッグアンドドロップ',
  dropzoneText: '',
  maxFiles: 0,
};

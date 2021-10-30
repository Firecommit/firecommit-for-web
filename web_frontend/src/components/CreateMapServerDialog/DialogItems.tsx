import React from 'react';
import {
  Button,
  ButtonProps,
  TextField,
  TextFieldProps,
  Typography,
  TypographyProps,
} from '@mui/material';
import { grey } from '@mui/material/colors';

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

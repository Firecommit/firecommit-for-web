import React from 'react';
import {
  Divider,
  Grid,
  TextField,
  TextFieldProps,
  Typography,
} from '@mui/material';

export type DialogTextFieldProps = TextFieldProps & {
  textFieldLabel: TextFieldProps['label'];
};
export const DialogTextField = ({
  label,
  textFieldLabel,
  ...props
}: DialogTextFieldProps) => (
  <Grid container flexDirection="column" alignItems="flex-start" gap={2}>
    <Divider flexItem />
    <Typography>{label}</Typography>
    <TextField size="small" label={textFieldLabel} {...props} />
  </Grid>
);

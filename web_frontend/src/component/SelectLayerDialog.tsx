import React, { ChangeEvent } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

type Layer = number;
export type SelectLayerDialogProps = {
  open: boolean;
  onClose: () => void;
  layer: number;
  onChangeLayer: (e: ChangeEvent<HTMLInputElement>) => void;
  layerList: Array<Layer>;
};

export const SelectLayerDialog = ({
  open,
  onClose,
  layer,
  onChangeLayer,
  layerList,
}: SelectLayerDialogProps) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>階を選択</DialogTitle>
    <DialogContent>
      <FormControl component="fieldset">
        <RadioGroup value={layer} onChange={onChangeLayer}>
          {layerList.map((l) => (
            <FormControlLabel
              key={l}
              value={l}
              control={<Radio />}
              label={`${l}階`}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </DialogContent>
  </Dialog>
);

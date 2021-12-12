import React from 'react';
import { DialogContent, DialogTitle } from '@mui/material';
import { CheckCircleOutline as CheckCircleOutlineIcon } from '@mui/icons-material';
import {
  DialogContentExplain,
  DialogTitleTypography,
  ProgressTypography,
} from '../DialogItems';
import CompleteImage from './undraw_elements_cipa.svg';

import { theme } from '../../../theme/theme';

export const CompleteCreateMap = () => (
  <>
    <DialogTitle
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: '60%',
      }}
    >
      <ProgressTypography>
        <CheckCircleOutlineIcon sx={{ color: theme.status.success }} />
      </ProgressTypography>
      <DialogTitleTypography>
        お客様のインドアマップを
        <br />
        一生懸命作成しております。
      </DialogTitleTypography>
    </DialogTitle>
    <DialogContent sx={{ display: 'flex', flexDirection: 'column' }}>
      <DialogContentExplain sx={{ textAlign: 'center' }}>
        作成には通常3日程度かかりますが、場合によってはそれ以上かかることもあります。作成が完了したらメールにてお知らせします。
      </DialogContentExplain>
      <img
        src={CompleteImage}
        alt="complete"
        style={{ width: '70%', alignSelf: 'center' }}
      />
    </DialogContent>
  </>
);

import { requiredValidator } from '../../../validator/common';
import type { Valid } from '../../../validator/common';

export type { Valid } from '../../../validator/common';

export const iconValidator = (file?: File): Valid => ({
  ...requiredValidator(file),
  message: 'アイコンを登録していません',
});

import { requiredValidator } from '../../../validator/common';
import type { Valid } from '../../../validator/common';

export type { Valid } from '../../../validator/common';

export const mapServerNamingValidator = (str: string): Valid =>
  requiredValidator(str);

export type Valid = {
  valid: boolean;
  message?: string;
};

export const requiredValidator = (value: any): Valid => {
  if (!value && value !== 0) return { valid: false, message: '必須項目です' };
  return { valid: true };
};

export const stringLengthValidator = (
  str: string,
  max: number = -1,
  min: number = 0
): Valid => {
  const len = str.length;
  if (len < min)
    return {
      valid: false,
      message: '文字数が短すぎます',
    };
  if (len >= max && max > 0)
    return {
      valid: false,
      message: `${max}文字以内で入力してください`,
    };
  return { valid: true };
};

export const hasProperty = (obj: object, key: string) =>
  !!obj && Object.prototype.hasOwnProperty.call(obj, key);

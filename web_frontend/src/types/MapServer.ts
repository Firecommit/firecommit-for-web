export type MapServer = {
  id: string;
  name: string;
  inAudit: boolean; // True when creating map
  iconURL?: string;
  maps: { [key: string]: string }; // Layer{n}: URL
  adminUserId: string;
  members: { [key: string]: boolean };
};

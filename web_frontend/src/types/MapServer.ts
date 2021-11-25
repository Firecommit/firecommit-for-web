export type MapServer = {
  id: string;
  name: string;
  iconURL?: string;
  maps: { [key: string]: string }; // Layer{n}: URL
  adminUserId: string;
  members: { [key: string]: boolean };
};

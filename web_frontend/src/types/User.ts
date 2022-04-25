export type Coordinate = {
  x: number;
  y: number;
};

export type User = {
  id: string;
  coordinate: Coordinate;
  workspace: {
    [key: string]: boolean; // wid: isCurrentWorkspace
  };
  layer: {
    [key: number]: boolean; // layer: isCurrentLayer
  };
  name?: string;
  photoURL?: string;
  email?: string;
};

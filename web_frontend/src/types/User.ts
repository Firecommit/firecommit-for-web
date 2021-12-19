export type Coordinate = {
  latitude: number;
  longtitude: number;
};

export type User = {
  id: string;
  coordinate: Coordinate;
  workspace: {
    [key: string]: boolean; // wid: isCurrentWorkspace
  };
  layer: {
    [key: string]: boolean; // layer: isCurrentLayer
  };
};

import React from 'react';
import { useParams } from 'react-router';
import { useGetMapServer } from '../../hooks/useMapServer';

export const WorkSpaceScreen = () => {
  const { wid } = useParams<{ wid: string }>();
  const mapServer = useGetMapServer(wid);
  console.log('mapServer:', mapServer);

  return <h1>WorkSpace:{wid}</h1>;
};

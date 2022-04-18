import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import { MapServer } from '../types/MapServer';

export const useGetMapServer = (wid: string): MapServer | undefined => {
  const [mapServer, setMapServer] = useState<MapServer>();

  useEffect(() => {
    const workspaceRef = ref(db, `workspace/${wid}`);
    onValue(workspaceRef, (snapshot) => {
      const snapshotVal: Omit<MapServer, 'id'> = snapshot.val();
      setMapServer({
        ...snapshotVal,
        id: wid,
      });
    });
  }, [wid]);

  return mapServer;
};

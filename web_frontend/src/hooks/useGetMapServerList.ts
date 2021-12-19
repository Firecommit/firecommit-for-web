import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import { MapServer } from '../types/MapServer';

export const useGetMapServerList = (): Array<MapServer> => {
  const [list, setList] = useState<Array<MapServer>>([]);

  useEffect(() => {
    const workspaceListRef = ref(db, 'workspace');

    let tmp: Array<MapServer> = [];
    onValue(workspaceListRef, (snapshot) => {
      const snapshotVal: { [key: string]: Omit<MapServer, 'id'> } =
        snapshot.val();
      tmp = Object.entries(snapshotVal).map(([key, value]) => ({
        id: key,
        ...value,
      }));
    });
    // boolean: trueならリストに変更なし
    const deps = tmp.reduce((prev, current, index) => {
      if (current?.id !== list[index]?.id) return false;
      return true;
    }, true);
    if (deps && list.length) return;
    setList(tmp);
  }, [list]);

  return list;
};

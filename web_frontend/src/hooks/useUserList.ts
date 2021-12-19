import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import type { User } from '../types/User';

export const useUserList = (wid: string, layer: number) => {
  const [userList, setUserList] = useState<Array<User>>([]);

  useEffect(() => {
    const userListRef = ref(db, 'users');
    let tmp: Array<User> = [];
    onValue(userListRef, (snapshot) => {
      const snapshotVal: { [key: string]: Omit<User, 'id'> } = snapshot.val();
      tmp = Object.entries(snapshotVal)
        .map(([key, value]) => ({
          id: key,
          ...value,
        }))
        .filter((elm) => elm.workspace[wid] && elm?.layer[layer]);
    });

    setUserList(tmp);
  }, [userList, wid, layer]);

  return userList;
};

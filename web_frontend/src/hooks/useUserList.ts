import { useContext, useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../firebase';
import type { User } from '../types/User';
import { AuthContext } from '../component/AuthProvider';

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
        .filter(
          (elm) => elm.workspace && elm.workspace[wid] && elm?.layer[layer]
        );
    });

    setUserList(tmp);
  }, [wid, layer]);

  return userList;
};

export const useCurrentUser = (inWebView?: boolean): User | undefined => {
  const [currentUser, setCurrentUser] = useState<User>();

  const inputValue = <HTMLInputElement>document.getElementById('userId');
  const contextValue = useContext(AuthContext).currentUser?.uid;
  const currentUserId = inWebView ? inputValue.value : contextValue;
  if (!currentUserId) return undefined;
  const currentUserRef = ref(db, `users/${currentUserId}`);
  let tmp: User | undefined;
  onValue(currentUserRef, (snapshot) => {
    tmp = {
      id: currentUserId,
      ...snapshot.val(),
    };
    if (JSON.stringify(tmp) !== JSON.stringify(currentUser)) {
      setCurrentUser(tmp);
    }
  });

  return currentUser;
};

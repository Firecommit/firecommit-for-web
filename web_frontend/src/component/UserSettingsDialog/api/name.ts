import { ref, set } from 'firebase/database';
import { db } from '../../../firebase';

export const updateUserName = async (name: string, userId: string) => {
  await set(ref(db, `users/${userId}/name`), name);
};

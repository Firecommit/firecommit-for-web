import { ref, set } from 'firebase/database';
import { db } from '../../../firebase';

export const updateEmail = async (email: string, userId: string) => {
  await set(ref(db, `users/${userId}/email`), email);
};

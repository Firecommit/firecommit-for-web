import { ref, set } from 'firebase/database';
import { db } from '../../../firebase';

export const updateWorkspaceName = async (name: string, wid: string) => {
  await set(ref(db, `workspace/${wid}/name`), name);
};

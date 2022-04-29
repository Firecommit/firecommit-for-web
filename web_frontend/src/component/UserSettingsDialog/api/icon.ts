import { ref, set } from 'firebase/database';
import { db, storageRef } from '../../../firebase';

export const updateIconUrl = async (iconUrl: string, userId: string) => {
  await set(ref(db, `users/${userId}/photoURL`), iconUrl);
};

export const uploadIcon = async (iconFile: File, userId: string) => {
  const iconRef = storageRef.child(`/users/icon/${userId}.png`);
  await iconRef.put(iconFile);
  const iconUrl = await iconRef.getDownloadURL();
  await updateIconUrl(iconUrl, userId);
};

import { ref, set } from 'firebase/database';
import { db, storageRef } from '../../../firebase';

export const updateIconUrl = async (iconUrl: string, wid: string) => {
  await set(ref(db, `workspace/${wid}/iconURL`), iconUrl);
};

export const uploadIcon = async (iconFile: File, wid: string) => {
  const iconRef = storageRef.child(`/icons/${wid}.png`);
  await iconRef.put(iconFile);
  const iconUrl = await iconRef.getDownloadURL();
  await updateIconUrl(iconUrl, wid);
};

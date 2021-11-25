import React, { ChangeEvent, useState, useContext } from 'react';
import { CreateMapServerDialogPresenter, OuterProps } from './Presenter';
import { AuthContext } from '../AuthProvider';
import { MapServer } from '../../types/MapServer';
import { storageRef } from '../../firebase';

export type Props = OuterProps & {};

export const CreateMapServerDialog = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(page + 1);

  const { currentUser } = useContext(AuthContext);

  const [orgName, setOrgName] = useState('');
  const handleChangeOrgName = (e: ChangeEvent<HTMLInputElement>) =>
    setOrgName(e.target.value);
  const [icon, setIcon] = useState<File>();
  const [buildingDrawing, setBuildingDrawing] = useState<Array<File>>();

  const uploadIcon = async (iconFile: File): Promise<string> => {
    const iconRef = storageRef.child(`/icons/${orgName}.png`);
    await iconRef.put(iconFile);
    const iconURL = await iconRef.getDownloadURL();
    return iconURL;
  };

  const uploadBuildingDrawing = async (
    buildingDrawingList: Array<File>
  ): Promise<MapServer['maps']> => {
    const maps: MapServer['maps'] = {} as MapServer['maps'];
    buildingDrawingList.forEach(async (file, index) => {
      const imageRef = storageRef.child(
        `/maps/${orgName}/layoer${index + 1}.png`
      );

      await imageRef.put(file);
      const imageURL = await imageRef.getDownloadURL();
      maps[`layer${index + 1}`] = imageURL;
    });

    return maps;
  };

  const handleClickCreateMapServer = async () => {
    if (!currentUser) return;

    const mapServer: MapServer = {
      name: orgName,
      adminUserId: currentUser?.uid,
      members: {},
    } as MapServer;
    mapServer.members[currentUser.uid] = true;

    try {
      if (icon) mapServer.iconURL = await uploadIcon(icon);
      if (buildingDrawing)
        mapServer.maps = await uploadBuildingDrawing(buildingDrawing);

      console.log(mapServer);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CreateMapServerDialogPresenter
      page={page}
      nextPage={nextPage}
      handleChangeOrgName={handleChangeOrgName}
      setIcon={setIcon}
      setBuildingDrawing={setBuildingDrawing}
      handleClickCreateMapServer={handleClickCreateMapServer}
    />
  );
};

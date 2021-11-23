import React, { ChangeEvent, useState } from 'react';
import { CreateMapServerDialogPresenter, OuterProps } from './Presenter';

export type Props = OuterProps & {};

export const CreateMapServerDialog = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(page + 1);

  const [orgName, setOrgName] = useState('');
  const handleChangeOrgName = (e: ChangeEvent<HTMLInputElement>) =>
    setOrgName(e.target.value);
  const [icon, setIcon] = useState<File>();
  const [buildingDrawing, setBuildingDrawing] = useState<Array<File>>();

  console.log('orgName:', orgName);
  console.log('icon:', icon);
  console.log('buildingDrawing:', buildingDrawing);

  return (
    <CreateMapServerDialogPresenter
      page={page}
      nextPage={nextPage}
      handleChangeOrgName={handleChangeOrgName}
      setIcon={setIcon}
      setBuildingDrawing={setBuildingDrawing}
    />
  );
};

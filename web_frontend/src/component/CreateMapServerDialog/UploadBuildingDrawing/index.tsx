import React, { useCallback } from 'react';
import { UploadBuildingDrawingPresenter } from './Presenter';

export const UploadBuildingDrawing = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  return <UploadBuildingDrawingPresenter onDrop={onDrop} />;
};

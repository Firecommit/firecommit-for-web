import React, { useCallback } from 'react';
import { UploadIconPresenter } from './Presenter';

export const UploadIcon = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  return <UploadIconPresenter onDrop={onDrop} />;
};

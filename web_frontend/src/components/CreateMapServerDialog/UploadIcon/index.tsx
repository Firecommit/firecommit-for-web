import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { UploadIconPresenter } from './Presenter';

export const UploadIcon = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <UploadIconPresenter
      getRootProps={getRootProps}
      getInputProps={getInputProps}
      isDragActive={isDragActive}
    />
  );
};

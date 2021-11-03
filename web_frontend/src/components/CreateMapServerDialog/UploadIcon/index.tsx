import React, { useCallback } from 'react';
import { UploadIconPresenter, OuterProps } from './Presenter';

export type Props = OuterProps & {};

export const UploadIcon = (props: Props) => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  return <UploadIconPresenter onDrop={onDrop} {...props} />;
};

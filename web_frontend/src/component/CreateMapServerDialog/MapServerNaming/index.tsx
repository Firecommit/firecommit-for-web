import React from 'react';
import { MapServerNamingPresenter, OuterProps } from './Presenter';

type Props = OuterProps & {};

export const MapServerNaming = (props: Props) => (
  <MapServerNamingPresenter {...props} />
);

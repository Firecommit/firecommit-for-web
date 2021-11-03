import React, { useState } from 'react';
import { CreateMapServerDialogPresenter, OuterProps } from './Presenter';

export type Props = OuterProps & {};

export const CreateMapServerDialog = () => {
  const [page, setPage] = useState(1);
  const nextPage = () => setPage(page + 1);

  return <CreateMapServerDialogPresenter page={page} nextPage={nextPage} />;
};

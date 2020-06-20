import React from 'react';

import { Loading } from '../';

export default ({ match }) => {
  const {
    params: { type, product },
  } = match;
  return (
    <>
      <Loading />
    </>
  );
};

import React from 'react';

import './styles.scss';

export default ({ active, handleClose }) => {
  return (
    <div
      className={`Background ${active ? 'Background--active' : ''}`}
      onClick={handleClose}
    ></div>
  );
};

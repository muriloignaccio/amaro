import React from 'react';

import './styles.scss';

export default ({ variant = 'light' }) => {
  return (
    <div
      className='loading'
      style={{ background: `${variant === 'light' ? '#FFF' : '#000'}` }}
    >
      <div className='loading__container'>
        <svg
          width='86px'
          height='86px'
          viewBox='0 0 86 86'
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M41.0490478,20.6768643 L17.8547908,65.2286127 L25.5897656,65.2286127 L32.3491405,52.3062782 L53.1781012,52.3062782 L60.0257263,65.2286127 L68.1699485,65.2286127 L44.6401475,20.6768643 L41.0490478,20.6768643 L41.0490478,20.6768643 L41.0490478,20.6768643 Z M49.6810702,45.3830102 L35.9780619,45.3830102 L42.8460523,32.2579914 L49.6810702,45.3830102 L49.6810702,45.3830102 L49.6810702,45.3830102 Z'
            className='icon'
            style={{ stroke: `${variant === 'light' ? '#000' : '#FFF'}` }}
          ></path>
        </svg>
      </div>
    </div>
  );
};

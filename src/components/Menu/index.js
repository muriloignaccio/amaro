import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/Logo_white.svg';

import './styles.scss';

export default () => {
  return (
    <div className='Menu'>
      <div className='Menu__Header'>
        <FontAwesomeIcon icon={faTimes} size='lg' className='Menu__Icon' />
        <img src={Logo} alt='Logo da Amaro' className='Menu__Logo' />
      </div>
    </div>
  );
};

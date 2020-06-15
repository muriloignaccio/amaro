import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import Menu from '../../components/Menu';

import Logo from '../../assets/Logo.svg';

import './styles.scss';

export default () => {
  const [isMenuOn, ToggleMenu] = useState(false);
  return (
    <>
      <header className='Header'>
        <button className='Header__Item'>
          <FontAwesomeIcon
            icon={faBars}
            size='lg'
            className='Header__Icon--menu'
            onClick={() => ToggleMenu(!isMenuOn)}
          />
          MENU
        </button>

        <div className='Header__Item Header__Item--logo'>
          <img src={Logo} alt='Logo da Amaro' />
        </div>

        <button className='Header__Item'>
          SACOLA
          <FontAwesomeIcon
            icon={faShoppingBag}
            size='lg'
            className='Header__Icon--bag'
          />
        </button>
      </header>

      {isMenuOn && <Menu />}
    </>
  );
};

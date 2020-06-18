import React from 'react';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

import { Bag, Menu } from '../../components';

import { toggleMenu } from '../../actions/menu';
import { toggleBag } from '../../actions/bag';
import Logo from '../../assets/Logo.svg';

import './styles.scss';

export default () => {
  const dispatch = useDispatch();
  const handleMenuToggle = () => dispatch(toggleMenu());
  const handleBagToggle = () => dispatch(toggleBag());
  return (
    <>
      <header className='Header'>
        <button className='Header__Item' onClick={handleMenuToggle}>
          <FontAwesomeIcon
            icon={faBars}
            size='lg'
            className='Header__Icon--menu'
          />
          MENU
        </button>

        <div className='Header__Item Header__Item--logo'>
          <img src={Logo} alt='Logo da Amaro' className='Header__Logo' />
        </div>

        <button className='Header__Item' onClick={handleBagToggle}>
          SACOLA
          <FontAwesomeIcon
            icon={faShoppingBag}
            size='lg'
            className='Header__Icon--bag'
          />
        </button>
      </header>

      <Menu />
      <Bag />
    </>
  );
};

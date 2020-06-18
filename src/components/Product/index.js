import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './styles.scss';

export default () => {
  return (
    <div className='Product'>
      <p className='Product__Name'>Vestido transpasse bow</p>
      <div className='Product__Info'>
        <div className='Product__Quantity'>
          <button className='Product__Action'>
            <FontAwesomeIcon
              icon={faPlus}
              className='Product__Action--counter'
            />
          </button>
          <span className='Product__Quantity-Counter'>2</span>
          <button className='Product__Action'>
            <FontAwesomeIcon
              icon={faMinus}
              className='Product__Action--counter'
            />
          </button>
        </div>
        <span className='Product__Price'>R$ 199,90</span>
      </div>
    </div>
  );
};

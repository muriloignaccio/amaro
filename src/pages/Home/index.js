import React from 'react';

import './styles.scss';

import { Button } from '../../components';

import SkirtGirl from '../../assets/girl_skirt.svg';

export default () => {
  return (
    <div className='Home'>
      <div className='Home__Banners'>
        <img
          src={SkirtGirl}
          alt='Uma menina de saia rosa'
          className='Home__Banner-Item'
        />
      </div>
      <div className='Home__Actions'>
        <h1 className='Home__Title'>
          Peças atemporais e que combinam com tudo.
        </h1>
        <Button>Shop now</Button>
      </div>
    </div>
  );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

import { Background } from '../';

import { setCategory, setItem, toggleMenu } from '../../actions/menu';

import Logo from '../../assets/Logo_white.svg';

import './styles.scss';

export default () => {
  const dispatch = useDispatch();
  const { category, item, active } = useSelector(({ menu }) => menu);

  const collections = [
    {
      title: 'roupas',
      url: '/collections/clothes',
      products: [
        {
          title: 'batas',
          url: '/collections/clothes/batas',
        },
        {
          title: 'blusas',
          url: '/collections/clothes/blusas',
        },
        {
          title: 'calças',
          url: '/collections/clothes/calcas',
        },
        {
          title: 'camisas',
          url: '/collections/clothes/camisas',
        },
        {
          title: 'casacos',
          url: '/collections/clothes/casacos',
        },
        {
          title: 'croppeds',
          url: '/collections/clothes/croppeds',
        },
        {
          title: 'macacões',
          url: '/collections/clothes/macacoes',
        },
        {
          title: 'regatas',
          url: '/collections/clothes/regatas',
        },
        {
          title: 'saias',
          url: '/collections/clothes/saias',
        },
        {
          title: 'vestidos',
          url: '/collections/clothes/vestidos',
        },
      ],
    },
    {
      title: 'acessórios',
      url: '/collections/accessories',
      products: [
        {
          title: 'bolsas',
          url: '/collections/accessories/bolsas',
        },
        {
          title: 'óculos',
          url: '/collections/accessories/oculos',
        },
        {
          title: 'pulseiras',
          url: '/collections/accessories/pulseiras',
        },
      ],
    },
  ];

  const handleClose = () => dispatch(toggleMenu());

  const handleCategory = (category) => {
    dispatch(setItem(''));
    dispatch(setCategory(category));
    handleClose();
  };
  const handleItem = (item) => {
    const fetchedCategory = collections
      .filter(
        (collection) =>
          collection.products.filter((product) => product.title === item).length
      )
      .pop();

    dispatch(setCategory(fetchedCategory.title));
    dispatch(setItem(item));
    handleClose();
  };

  return (
    <>
      <div className={`Menu ${active ? 'Menu--active' : 'Menu--hidden'}`}>
        <div className='Menu__Header'>
          <button className='Menu__Icon' onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <Link to='/' onClick={() => handleCategory('')}>
            <img src={Logo} alt='Logo da Amaro' className='Menu__Logo' />
          </Link>
        </div>

        <div className='Menu__Categories'>
          {collections.map(({ title, url, products }) => (
            <ul className='Menu__Category-List' key={title}>
              <h2
                className={`Menu__Category-Title ${
                  category === title ? 'Menu__Category-Title--active' : ''
                }`}
                onClick={() => handleCategory(title)}
              >
                <Link className='Menu__Category-Link' to={url}>
                  {title}
                </Link>
              </h2>

              {products.map(({ title, url }) => (
                <li
                  className={`Menu__Category-Item ${
                    item === title ? 'Menu__Category-Item--active' : ''
                  }`}
                  onClick={() => handleItem(title)}
                  key={title}
                >
                  <Link className='Menu__Category-Link' to={url}>
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
        <div className='Menu__Socials'>
          <FontAwesomeIcon icon={faGithub} className='Menu__Social' />
          <FontAwesomeIcon icon={faInstagram} className='Menu__Social' />
          <FontAwesomeIcon icon={faLinkedinIn} className='Menu__Social' />
        </div>
      </div>

      <Background active={active} handleClose={handleClose} />
    </>
  );
};

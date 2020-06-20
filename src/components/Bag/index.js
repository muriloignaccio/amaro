import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleBag } from '../../actions/bag';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { Background, Button } from '../';

import EmptyCart from '../../assets/empty_cart.gif';

import './styles.scss';

export default () => {
  const dispatch = useDispatch();
  const { active } = useSelector(({ bag }) => bag);

  const handleClose = () => dispatch(toggleBag());
  return (
    <>
      <div className={`Bag ${active ? 'Bag--active' : 'Bag--hidden'}`}>
        <div className='Bag__Header'>
          <h2 className='Bag__Title'>Sacola de Compras</h2>
          <button className='Bag__Icon' onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>

        <div className='Bag__Products Bag__Products--empty'>
          {/* <Product />
          <Product />
          <Product /> */}
          <img
            src={EmptyCart}
            alt='Imagem do carrinho vazio'
            className='Bag__Empty-Cart'
          />
          <p className='Bag__Empty-Text'>Sua sacola está vazia </p>
        </div>

        <div className='Bag__Footer'>
          {/* <h2 className='Bag__Price-Title'>Total</h2>
          <p className='Bag__Subtotal'>R$ 199,90</p>
          <Button>Finalizar compra</Button> */}

          <Button>Comprar mais</Button>
        </div>
      </div>
      <Background active={active} handleClose={handleClose} />
    </>
  );
};

import React from 'react';
import './burger.scss';

function BurgerIcon({ isOpen, toggle }) {
  return (
    <button
      aria-label='open menu'
      className={isOpen ? 'hamburger hamburger--open' : 'hamburger'}
      onClick={toggle}
    >
      <div className='hamburger-box'>
        <div className='hamburger-inner' />
      </div>
    </button>
  );
}
export default BurgerIcon;

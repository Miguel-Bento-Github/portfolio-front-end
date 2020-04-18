import React from 'react';
import './burger.scss';

function BurgerIcon({ isOpen, toggle }) {
  return (
    <button
      aria-label='open menu'
      className={isOpen ? 'hamburger open' : 'hamburger'}
      onClick={toggle}
    >
      <div className='hamburger-box'>
        <div className='hamburger-inner hamburger-inner-top' />
        <div className='hamburger-inner hamburger-inner-center' />
        <div className='hamburger-inner hamburger-inner-bottom' />
      </div>
    </button>
  );
}
export default BurgerIcon;

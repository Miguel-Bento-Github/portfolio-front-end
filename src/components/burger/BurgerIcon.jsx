import React from 'react';
import './burger.scss';

export default function BurgerIcon({ isOpen, ...props }) {
  return (
    <button
      aria-label='open menu'
      className={isOpen ? 'hamburger hamburger--open' : 'hamburger'}
      {...props}
    >
      <div className='hamburger-box'>
        <div className='hamburger-inner' />
      </div>
    </button>
  );
}

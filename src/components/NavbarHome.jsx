import React, { useState } from 'react';
import './navbarHome.scss';
import BurgerIcon from './burger/BurgerIcon';
import PageOverview from './PageOverview';

const NavbarHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <nav className='nav'>
      <BurgerIcon onClick={toggleModal} isOpen={isOpen} />
      {<PageOverview isOpen={isOpen} toggle={toggleModal} close={closeModal} />}
    </nav>
  );
};

export default NavbarHome;

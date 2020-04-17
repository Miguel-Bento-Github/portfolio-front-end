import React, { useState, useRef } from 'react';
import './navbarHome.scss';
import BurgerIcon from './burger/BurgerIcon';
import PageOverview from './PageOverview';
import useLinks from '../hooks/useLinks';

function NavbarHome() {
  const defaultState = false;
  const [isOpen, setIsOpen] = useState(defaultState);
  const navRef = useRef();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  function closeModal() {
    setIsOpen(defaultState);
  }

  /**
   * Closes popup if a click is outside of the component.
   * Timeout was set so that this function doesn't fire before
   * the click on the close hamburger button
   */
  function clickOutside({ target }) {
    if (!navRef.current.contains(target)) {
      closeModal();
    }
  }

  useLinks(isOpen, clickOutside);
  return (
    <nav ref={navRef} className='nav'>
      <BurgerIcon isOpen={isOpen} toggle={toggleModal} />
      <PageOverview
        isOpen={isOpen}
        close={closeModal}
        clickOutside={clickOutside}
      />
    </nav>
  );
}

export default NavbarHome;

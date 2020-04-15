import React, { useEffect, useRef, useLayoutEffect } from 'react';
import './pageOverview.scss';
import List from './listURL/ListURL';
import { isDesktopWidth } from '../helpers/isMobile';

const PageOverview = ({ isOpen, toggle, close }) => {
  useLayoutEffect(() => {
    document.getElementById('section').classList.add('blur');
  });

  const pages = ['skills', 'projects', 'contact'];

  const displayPages = pages.map((page) => (
    <List key={page} close={close} to={page} name={page} />
  ));

  const ref = useRef(null);

  /**
   * Closes popup if a click is outside of the component.
   * Timeout was set so that this function doesn't fire before
   * the click on the close hamburger button
   *
   * @param {object} event
   */
  function handleClickOutside(event) {
    if (isOpen && !ref.current.contains(event.target)) {
      close();
    }
  }

  function disableAnchorClicks(disable) {
    const links = document.querySelectorAll('.page');

    if (disable) {
      links.forEach((link) => {
        link.style.pointerEvents = 'none';
      });
    } else {
      links.forEach((link) => {
        link.style.pointerEvents = '';
      });
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    disableAnchorClicks(true);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      disableAnchorClicks();
    };
  });

  const blur = (section) => {
    section.classList.add('blur-active');
  };

  const unBlur = (section) => {
    section.classList.remove('blur-active');
  };

  useEffect(() => {
    const section = document.getElementById('section');
    if (!isOpen) unBlur(section);
    else blur(section);
  }, [isOpen]);

  const display = isOpen ? '' : 'none';

  return (
    <div style={{ display }} ref={ref} className='page-overview'>
      <ul className='nav-list'>
        <List close={close} exact={true} to='/' name='home' />
        {displayPages}
      </ul>
      {isDesktopWidth() && (
        <button
          aria-label='close navbar'
          type='button'
          className='btn btn-nav-close'
          onClick={close}
        >
          close
        </button>
      )}
    </div>
  );
};
export default PageOverview;

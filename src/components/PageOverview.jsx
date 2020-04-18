import React, { useRef } from 'react';
import './pageOverview.scss';
import List from './listURL/ListURL';
import { isDesktopWidth } from '../helpers/isMobile';

const PageOverview = ({ isOpen, close }) => {
  const ref = useRef();
  const pages = ['projects', 'skills', 'contact'];
  const DisplayPages = pages.map((page) => (
    <List key={page} close={close} to={page} name={page} />
  ));

  const CloseButton = isDesktopWidth() && (
    <button
      aria-label='close navbar'
      type='button'
      className='btn btn-nav-close'
      onClick={close}
    >
      close
    </button>
  );

  if (isOpen) {
    if (ref.current) {
      ref.current.classList.remove('page-overview--close');
      ref.current.classList.add('page-overview--open');
    }
  } else {
    if (ref.current) {
      ref.current.classList.remove('page-overview--open');
      ref.current.classList.add('page-overview--close');
    }
  }

  return (
    <div ref={ref} className='page-overview'>
      <ul className='nav-list'>
        <List close={close} exact={true} to='/' name='home' />
        {DisplayPages}
      </ul>
      {CloseButton}
    </div>
  );
};
export default PageOverview;

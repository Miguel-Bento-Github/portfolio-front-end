import React, { useRef, useLayoutEffect } from 'react';
import './pageOverview.scss';
import List from './listURL/ListURL';
import { isDesktopWidth } from '../helpers/isMobile';
import useBlur from '../hooks/useBlur';

const PageOverview = ({ isOpen, close }) => {
  useBlur(isOpen);

  const ref = useRef();
  const display = isOpen ? '' : 'none';
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

  return (
    <div style={{ display }} ref={ref} className='page-overview'>
      <ul className='nav-list'>
        <List close={close} exact={true} to='/' name='home' />
        {DisplayPages}
      </ul>
      {CloseButton}
    </div>
  );
};
export default PageOverview;

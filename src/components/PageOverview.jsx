import React, { useRef, useLayoutEffect } from 'react';
import './pageOverview.scss';
import List from './listURL/ListURL';
import { isDesktopWidth } from '../helpers/isMobile';
import useBlur from '../hooks/useBlur';

const PageOverview = ({ isOpen, close }) => {
  useLayoutEffect(() => {
    document.getElementById('section').classList.add('blur');
  });

  const ref = useRef();
  const display = isOpen ? '' : 'none';
  const pages = ['skills', 'projects', 'contact'];
  const DisplayPages = pages.map((page) => (
    <List key={page} close={close} to={page} name={page} />
  ));

  useBlur(isOpen);

  return (
    <div style={{ display }} ref={ref} className='page-overview'>
      <ul className='nav-list'>
        <List close={close} exact={true} to='/' name='home' />
        {DisplayPages}
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

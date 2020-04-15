import React from 'react';
import './home.scss';
import { isDesktopWidth } from '../../helpers/isMobile';
import TypeWriter from '../../components/TypeWriter';
import AuthorName from '../../components/AuthorName';
import { DesktopDescription, MobileDescription } from './Description';

export default function Home() {
  return (
    <div className='slit'>
      <div className='bg zoom' />
      <section id='section' className='index page'>
        <div className='showcase content row' id='header'>
          <AuthorName />
          <TypeWriter />
        </div>
        {isDesktopWidth() ? DesktopDescription : MobileDescription}
      </section>
    </div>
  );
}

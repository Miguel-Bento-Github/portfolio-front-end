import React, { useEffect, useRef } from 'react';
import { isDesktopWidth } from '../../../helpers/isMobile';

export default function ProjectsList({ link, img, title, description, id }) {
  const ref = useRef();
  useEffect(() => {
    const element = ref.current;
    element.classList.add('project-content-loaded');
    return () => {
      element.classList.remove('project-content-loaded');
    };
  });

  const Title = (
    <a
      className='project-title'
      rel='noopener noreferrer'
      target='_blank'
      href={link}
    >
      {title}
    </a>
  );

  const Image = (
    <a
      className='project-img-container'
      rel='noopener noreferrer'
      target='_blank'
      href={link}
    >
      <img className='project-img' src={img} alt={title} />
    </a>
  );

  const Description = (
    <p className='project-description'>
      {Title}
      <span>{description}</span>
    </p>
  );

  return (
    <li id={id} className='projects-list'>
      <div ref={ref} className='project-content'>
        {Image}
        {isDesktopWidth() && Description}
      </div>
    </li>
  );
}

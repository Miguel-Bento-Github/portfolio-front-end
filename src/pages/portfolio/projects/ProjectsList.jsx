import React from 'react';

export default function ProjectsList({ link, img, imgTitle, projectName }) {
  return (
    <li className='projects-list'>
      <a
        rel='noopener noreferrer'
        target='_blank'
        href={link}
        className='project'
      >
        <img className='project-img' src={img} alt={imgTitle} />
      </a>
      <a
        rel='noopener noreferrer'
        target='_blank'
        href={link}
        className='project'
      >
        <p className='project-txt'>{projectName}</p>
      </a>
    </li>
  );
}

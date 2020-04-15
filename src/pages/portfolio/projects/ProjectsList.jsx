import React, { useEffect, useRef } from 'react';

function ProjectsList({ link, img, title, description, id }) {
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
      className='project-title page'
      rel='noopener noreferrer'
      target='_blank'
      href={link}
    >
      {title}
    </a>
  );

  const Image = (
    <a
      className='project-img-container page'
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
    <li className='projects-list'>
      <div id={id} ref={ref} className='project-content'>
        {Image}
        {Description}
      </div>
    </li>
  );
}
export default ProjectsList;

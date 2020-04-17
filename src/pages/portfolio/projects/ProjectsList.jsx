import React, { useEffect, useRef, useState } from 'react';
import checkIfInView from '../helpers/checkIfInView';

function ProjectsList({
  link,
  img,
  title,
  description,
  id,
  setWatchingID,
  isFirst,
  isLast,
  setChevronDirection,
}) {
  const ref = useRef();
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    function setActiveViews() {
      const inView = checkIfInView(id);
      setChevronDirection(isLast && inView);
      if (inView) {
        setIsInView(true);
        setWatchingID(id);
      }
    }
    window.addEventListener('scroll', setActiveViews);
    return () => {
      window.removeEventListener('scroll', setActiveViews);
    };
  });

  useEffect(() => {
    const currentElement = ref.current;

    if (isInView || isFirst) {
      currentElement.classList.add('project-content-loaded');
    }
    return () => {
      currentElement.classList.remove('project-content-loaded');
    };
  }, [isInView, isFirst]);

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

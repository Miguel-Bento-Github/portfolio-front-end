import React, { useEffect, useRef, useState } from 'react';
import checkIfInView from '../helpers/checkIfInView';
import resizeImg from '../helpers/resizeImg';
import debounce from '../../../helpers/debounce';

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
  const [imgURL, setImageURL] = useState(img);

  useEffect(() => {
    function setActiveViews() {
      const inView = checkIfInView(id);

      setChevronDirection(isLast && inView);
      if (inView) {
        setIsInView(true);
        setWatchingID(id);
      }
      return null;
    }

    window.addEventListener('scroll', setActiveViews);

    return () => {
      window.removeEventListener('scroll', setActiveViews);
    };
  }, [id, isLast, setChevronDirection, setWatchingID]);

  useEffect(() => {
    function defineState() {
      setImageURL(resizeImg(img));
    }
    const defineURL = debounce(defineState, 500);

    window.addEventListener('resize', defineURL);
    return () => {
      window.removeEventListener('resize', defineURL);
    };
  }, [img]);

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
      id='project-title'
      className='project-title page'
      rel='noopener noreferrer'
      target='_blank'
      href={link}
    >
      {title}
    </a>
  );

  const Image = (
    <a className='project-img-container page' rel='noopener noreferrer' target='_blank' href={link}>
      <img className='project-img' src={imgURL} alt={title} />
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

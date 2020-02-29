import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Icon = ({ img, name, link }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const className = `img-skill img-skill--${name.toLowerCase()}${
    hovered ? ' shake' : ''
  }`;

  return (
    <button
      aria-label={name}
      type='button'
      className='btn btn--link'
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <a
        href={link}
        target='_blank'
        className='img-container'
        rel='noopener noreferrer'
      >
        <LazyLoadImage
          src={img}
          effect='blur'
          alt={name}
          className={className}
        />
        <figcaption className='img-caption'>{name}</figcaption>
      </a>
    </button>
  );
};

export default Icon;

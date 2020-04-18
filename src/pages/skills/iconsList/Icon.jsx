import React, { useState } from 'react';

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
      className='skill-logo btn btn--link'
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
    >
      <a
        href={link}
        target='_blank'
        className='img-container'
        rel='noopener noreferrer'
      >
        <img src={img} alt={name} className={className} />
        <figcaption className='img-caption'>{name}</figcaption>
      </a>
    </button>
  );
};

export default Icon;

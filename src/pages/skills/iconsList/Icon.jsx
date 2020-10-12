import React, { useState } from "react";

const Icon = ({ img, name, link }) => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const className = `img-skill img-skill--${name.toLowerCase()}${hovered ? " shake" : ""}`;

  return (
    <a
      aria-label={name}
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      href={link}
      target="_blank"
      className="img-container"
      rel="noopener noreferrer"
    >
      <img src={img} alt={name} className={className} />
      <figcaption className="img-caption">{name}</figcaption>
    </a>
  );
};

export default Icon;

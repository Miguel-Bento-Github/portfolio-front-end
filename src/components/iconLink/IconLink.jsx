import React from "react";

const Link = ({ href, icon }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <i className={`shake fab fa-${icon} contact-icon`} />
    </a>
  );
};

export default Link;

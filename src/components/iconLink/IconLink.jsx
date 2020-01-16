import React from "react";

const Link = ({ href, icon }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <i className={`fab fa-${icon} contact-icon btn--link`} />
    </a>
  );
};

export default Link;

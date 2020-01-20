import React from "react";

const Link = ({ href, icon, children, className }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children && <span className="contact-text">{children}</span>}
      <i className={`fab fa-${icon} btn--link ${className && className}`} />
    </a>
  );
};

export default Link;

import React from 'react';

const Link = ({ href, icon, children, className }) => (
  <a target='_blank' rel='noopener noreferrer' href={href}>
    {children && <span className='contact-text'>{children}</span>}
    <div className={`btn--link ${className}`}>{icon.render()}</div>
  </a>
);

export default Link;

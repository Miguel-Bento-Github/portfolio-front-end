import React from 'react';

export default function Controller({
  ids,
  projectInView,
  chevronDirection,
  toNextProject,
}) {
  function chevronClassName() {
    if (ids[ids.length - 1] === projectInView || chevronDirection) {
      return ' projects-controller-reverse';
    }
    return '';
  }

  return (
    <button
      type='button'
      onClick={toNextProject}
      className={`projects-controller${chevronClassName()}`}
    >
      <i className='fas fa-2x fa-chevron-circle-down'></i>
    </button>
  );
}

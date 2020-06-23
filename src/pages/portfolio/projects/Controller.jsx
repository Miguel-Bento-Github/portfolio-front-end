import React from 'react';
import { ReactComponent as Chevron } from '../../../assets/icons/chevron.svg';

export default function Controller({ ids, projectInView, chevronDirection, toNextProject }) {
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
      <Chevron className='chevron' />
    </button>
  );
}

import React from 'react';

const displayName = () => {
  const name = Array.from('Miguel Bento');

  return name.map((letter, i) => {
    if (letter === ' ') return ' ';
    return (
      <span key={i + letter} className='showcase-header--pulse'>
        {letter}
      </span>
    );
  });
};
export default function AuthorName() {
  return <h1 className='showcase-header'>{displayName()}</h1>;
}

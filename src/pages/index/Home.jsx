import React, { useState, useRef } from 'react';
import './home.scss';
import TypeWriter from '../../components/TypeWriter';
import AuthorName from '../../components/AuthorName';

export default function Home() {
  const [type, setTyping] = useState(true);
  const sectionRef = useRef();

  function controlBlur(type) {
    const ref = sectionRef;
    ref.current.classList[type]('index--blur');
  }

  function handleLeave({ target }) {
    setTyping(true);
    controlBlur('remove');
    target.style.transform = 'scale(1)';
  }

  function handleEnter({ target }) {
    setTyping(false);
    controlBlur('add');
    target.style.transform = 'scale(1.1)';
  }

  const Description = (
    <p
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className='home-description'
    >
      Hello, welcome to my portfolio page.
      <br />
      <br />
      As web developer, I am actively coding and am very curious about learning
      programming languages. I'm fascinated by the creativity and dynamic of web
      development.
      <br />
      <br />
    </p>
  );

  return (
    <div className='slit'>
      <div className='bg zoom' />
      <section ref={sectionRef} id='section' className='index page'>
        <div className='showcase content row' id='header'>
          <AuthorName />
          {<TypeWriter type={type} />}
        </div>
      </section>
      {Description}
    </div>
  );
}

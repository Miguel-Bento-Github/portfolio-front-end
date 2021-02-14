import React, { useState, useRef } from "react";
import "./home.scss";
import TypeWriter from "../../components/TypeWriter";
import AuthorName from "../../components/AuthorName";

export default function Home() {
  const [type, setTyping] = useState(true);
  const sectionRef = useRef();
  const backgroundRef = useRef();
  const descriptionRef = useRef();

  function controlBlur(type) {
    const style = backgroundRef.current.style;
    setTimeout(() => {
      if (type === "add") {
        style.transition = "transform 250ms 100ms ease-out";
        style.filter = "blur(2px)";
      } else {
        style.filter = "blur(0)";
      }
    }, 50);

    // sectionRef.current.classList[type]('index--blur');
  }

  function handleLeave() {
    setTyping(true);
    controlBlur("remove");
    descriptionRef.current.style.transform = "scale(1)";
  }

  function handleEnter() {
    setTyping(false);
    controlBlur("add");
    descriptionRef.current.style.transform = "scale(1.1)";
  }

  const Description = (
    <p
      ref={descriptionRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="home-description"
    >
      <span>Hello, welcome to my portfolio page.</span>
      <span className="home-description-paragraph">
        As web developer, I am actively coding and am very curious about learning programming
        languages.
      </span>
      <span>I'm fascinated by the creativity and dynamic of web development.</span>
    </p>
  );

  return (
    <div className="slit">
      <div ref={backgroundRef} className="bg zoom" />
      <section id="section" ref={sectionRef} className="index page">
        <div className="showcase content row" id="header">
          <AuthorName />
          <TypeWriter type={type} />
        </div>
      </section>
      {Description}
    </div>
  );
}

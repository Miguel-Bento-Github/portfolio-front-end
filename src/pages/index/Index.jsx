import React, { Component } from "react";
import "./index.scss";
import TypeWriter from "../../components/TypeWriter";
import Letters from "./letters/Letters";
import { isDesktopWidth } from "../../helpers/isMobile";

export default class Index extends Component {
  state = {
    words: [""],
    txt: "",
    typeSpeed: 200,
    wordIndex: 0,
    wait: parseInt(1000, 10),
    isDeleting: false
  };

  componentDidMount() {
    this.init();
  }

  type() {
    let { txt, typeSpeed, wordIndex, words, wait, isDeleting } = this.state;

    const current = wordIndex % words.length;
    const fullTxt = words[current];
    isDeleting
      ? (txt = fullTxt.substring(0, txt.length - 1))
      : (txt = fullTxt.substring(0, txt.length + 1));

    if (isDeleting) {
      typeSpeed /= 2;
    }
    if (!isDeleting && txt === fullTxt) {
      typeSpeed = wait;
      isDeleting = true;
    } else if (isDeleting && txt === "") {
      isDeleting = false;
      wordIndex++;
      typeSpeed = 500;
    }
    setTimeout(() => this.type(), typeSpeed);
  }

  init() {
    const txtElement = document.querySelector(".typewriter");
    const words = JSON.parse(txtElement.getAttribute("data-words"));
    const wait = txtElement.getAttribute("data-wait");
    new TypeWriter(txtElement, words, wait);
  }

  displayName = () => {
    // prettier-ignore
    const name = ["M", "i", "g", "u", "e", "l", " ", "B", "e", "n", "t", "o"];
    return name.map(letter => (
      <Letters key={Math.random() + letter} letter={letter}></Letters>
    ));
  };

  removeSlit = e => {
    e.target.parentElement.classList.remove("slit");
  };

  render() {
    return (
      <div className="slit">
        <div className="bg zoom" />
        <section onMouseEnter={this.removeSlit} className="index blur page">
          <div className="showcase content row" id="header">
            <h1 className="showcase-header">{this.displayName()}</h1>
            <span
              className="typewriter typewriter-text"
              data-wait={1000}
              data-words='["Web Developer", "Frontend Developer", "React Expert", "Styling Enthusiast"]'
            />
          </div>
          {isDesktopWidth() && (
            <p className="home-description">
              Hello, welcome to my portfolio page.
              <br /> <br /> I've called my website mr-monkey, because my
              girlfriend calls me Mr. Monkey. She calls me that because she
              thinks I'm curious and active, just like a monkey. <br /> <br />{" "}
              Well, as web developer, I am indeed actively coding and am very
              curious about learning programming languages. I'm fascinated by
              the creativity and dynamic of web development.
              <br />
              <br /> I wish you a good journey in my page.
            </p>
          )}

          {!isDesktopWidth() && (
            <p className="home-description">
              Hello, welcome to my portfolio page.
              <br /> <br /> As web developer, I am actively coding and am very
              curious about learning programming languages. I'm fascinated by
              the creativity and dynamic of web development.
              <br />
              <br /> I wish you a good journey in my page.
            </p>
          )}
        </section>
      </div>
    );
  }
}

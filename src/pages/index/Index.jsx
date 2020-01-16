import React, { Component } from "react";
import "./index.scss";
import TypeWriter from "../../components/TypeWriter";
import Letters from "./letters/Letters";

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

  removeSlit = e => {
    e.target.parentElement.classList.remove("slit");
  };

  render() {
    return (
      <section onMouseEnter={this.removeSlit} className="slit index blur">
        <div className="bg zoom" />
        <div className="showcase content row" id="header">
          <h1 className="showcase-header">
            <Letters letter="M" />
            <Letters letter="i" />
            <Letters letter="g" />
            <Letters letter="u" />
            <Letters letter="e" />
            <Letters letter="l" />
            <span> </span>
            <Letters letter="B" />
            <Letters letter="e" />
            <Letters letter="n" />
            <Letters letter="t" />
            <Letters letter="o" />
          </h1>
          <span
            className="typewriter typewriter-text"
            data-wait={1000}
            data-words='["Web Developer", "Frontend Developer", "React Expert", "Styling Enthusiast"]'
          />
        </div>
        <p className="home-description">
          Hello, welcome to my portfolio page.
          <br /> <br /> I've called my website mr-monkey, because my girlfriend
          calls me Mr. Monkey. She calls me that because she thinks I'm curious
          and active, just like a monkey. <br /> <br /> Well, as web developer,
          I am indeed actively coding and am very curious about learning new
          programming languages. I'm fascinated by the creativity and dynamic of
          web development.
          <br />
          <br /> I wish you a good journey in my page.
        </p>
      </section>
    );
  }
}

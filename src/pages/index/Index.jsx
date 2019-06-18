import React, { Component } from "react";
import "./index.css";
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

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <section className="slit index blur">
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
            data-words='["Web Developer", "Programmer"]'
          />
        </div>
        <p className="home-description">
          Welcome to my portfolio page.
          <br />
          Feel free to look around and get to know me and my work.
          <br />
          Enjoy!
        </p>
      </section>
    );
  }
}

import React, { Component } from "react";
import "./index.css";
import TypeWriter from "../../components/TypeWriter";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.type();
  }

  state = {
    words: ["Amazing", "Philanthropist", "Genius", "Humble"],
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
      <div>
        <div className="index" />
        <div className="showcase content row" id="header">
          <h1>
            Miguel Bento
            <br />
            <span
              className="typewriter typewriter-text"
              data-wait={1000}
              data-words='["Amazing", "Philanthropist", "Genius", "Humble"]'
            />
          </h1>
        </div>
      </div>
    );
  }
}

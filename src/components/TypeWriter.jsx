import React, { PureComponent, createRef } from 'react';

export default class TypeWriter extends PureComponent {
  state = {
    words: [
      'Web Developer',
      'Frontend Developer',
      'React Expert',
      'Styling Enthusiast',
    ],
    txt: '',
    wordIndex: 0,
    isDeleting: false,
  };

  typeRef = createRef();

  componentDidMount() {
    this.type();
  }
  componentWillUnmount() {
    this.type(true);
  }

  type(cancel) {
    if (!this.typeRef.current) return null;
    let { txt, wordIndex, words, isDeleting } = this.state;
    let typeSpeed = 100;
    const current = wordIndex % words.length;
    const fullTxt = words[current];
    const write = fullTxt.substring(0, txt.length + 1);
    const del = fullTxt.substring(0, txt.length - 1);

    this.typeRef.current.innerHTML = txt;

    isDeleting ? this.setState({ txt: del }) : this.setState({ txt: write });

    if (isDeleting) typeSpeed /= 2;

    if (!isDeleting && txt === fullTxt) {
      typeSpeed = 1000;
      this.setState({ isDeleting: true });
    } else if (isDeleting && txt === '') {
      this.setState({ isDeleting: false });
      this.setState({ wordIndex: wordIndex + 1 });
    }
    setTimeout(() => this.type(cancel), typeSpeed);
  }

  render() {
    return <span ref={this.typeRef} className='typewriter typewriter-text' />;
  }
}

import React, { PureComponent, createRef, memo } from 'react';

class TypeWriter extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        'Web Developer',
        'Frontend Developer',
        'React Expert',
        'UI Developer',
        'Vue enthusiast',
      ],
      txt: '',
      wordIndex: 0,
      typeSpeed: 100,
      isDeleting: false,
      start: () => {},
      isRunning: false,
    };
  }

  typeRef = createRef();

  componentDidUpdate(prevProps) {
    const prevType = prevProps.type;
    const { type } = this.props;
    const { isRunning } = this.props;

    if (type !== prevType && type && isRunning === false) {
      this.setState({ isRunning: true });
      this.type();
    }
  }
  componentDidMount() {
    this.type();
  }

  componentWillUnmount() {
    this.type(true);
  }

  type(cancel) {
    if (!this.typeRef.current || cancel) return null;
    let { txt, wordIndex, words, isDeleting, typeSpeed } = this.state;
    const current = wordIndex % words.length;
    const fullTxt = words[current];
    const write = fullTxt.substring(0, txt.length + 1);
    const del = fullTxt.substring(0, txt.length - 1);
    this.typeRef.current.innerHTML = txt;
    let typing = () => setTimeout(() => this.type(), typeSpeed);

    isDeleting ? this.setState({ txt: del }) : this.setState({ txt: write });

    if (isDeleting) typeSpeed /= 2;

    if (!isDeleting && txt === fullTxt) {
      typeSpeed = 1000;
      this.setState({ isDeleting: true });
    } else if (isDeleting && txt === '') {
      this.setState({ isDeleting: false });
      this.setState({ wordIndex: wordIndex + 1 });
    }

    if (this.props.type) {
      this.typeRef.current.classList.add('typewriter--blink');
      typing();
    } else {
      this.typeRef.current.classList.remove('typewriter--blink');
      this.setState({ isDeleting: true });
      typing();
      if (!txt) {
        clearTimeout(typing);
      }
    }
  }

  render() {
    return <span ref={this.typeRef} className='typewriter typewriter-text' />;
  }
}

export default memo(TypeWriter);

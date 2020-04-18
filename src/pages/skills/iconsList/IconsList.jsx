import React from 'react';
import IconLi from './IconLi';
// js
import Vue from '../icons/js/vue.svg';
import Js from '../icons/js/js.svg';
import Node from '../icons/js/node.svg';
import ReactImg from '../icons/js/react.svg';
// css
import Bootstrap from '../icons/css/bootstrap.svg';
import Styled from '../icons/css/styled.svg';
import Css from '../icons/css/css.svg';
import Sass from '../icons/css/sass.svg';
// markup
import Ejs from '../icons/markup/ejs.svg';
import Mustache from '../icons/markup/hb.svg';
import Html from '../icons/markup/html.svg';
// other
import Git from '../icons/others/git.svg';
import Aws from '../icons/others/aws.svg';
import MongoDb from '../icons/others/mongodb.png';
import Npm from '../icons/others/npm.svg';

const jsLinks = {
  React: 'https://reactjs.org/',
  Vue: 'https://vuejs.org/',
  Javascript: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  Node: 'https://www.nodejs.org',
};
const styleLinks = {
  CSS3: 'https://developer.mozilla.org/en-US/docs/Archive/CSS3',
  Bootstrap: 'https://getbootstrap.com/',
  Sass: 'https://sass-lang.com/',
  Styled: 'https://styled-components.com/',
};
const markupLinks = {
  EJS: 'https://ejs.co/',
  JSX: 'https://reactjs.org/docs/introducing-jsx.html',
  HTML5: 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  Mustache: 'https://mustache.github.io/',
};
const otherLinks = {
  Heroku: 'https://www.heroku.com/',
  Git: 'https://git-scm.com/',
  MongoDB: 'https://www.mongodb.com/',
  NPM: 'https://www.npmjs.com/',
};

function IconsList() {
  return (
    <ul className='skill-list'>
      <IconLi
        title='Javascript'
        images={[ReactImg, Vue, Js, Node]}
        name={['React', 'Vue', 'Javascript', 'Node']}
        links={jsLinks}
      />
      <IconLi
        title='Styling'
        images={[Css, Styled, Bootstrap, Sass]}
        name={['CSS3', 'Bootstrap', 'Sass', 'Styled']}
        links={styleLinks}
      />
      <IconLi
        title='Markup'
        images={[Ejs, ReactImg, Html, Mustache]}
        name={['EJS', 'JSX', 'HTML5', 'Mustache']}
        links={markupLinks}
      />
      <IconLi
        title='Other'
        images={[Aws, Git, MongoDb, Npm]}
        name={['AWS', 'Git', 'MongoDB', 'NPM']}
        links={otherLinks}
      />
    </ul>
  );
}

export default IconsList;

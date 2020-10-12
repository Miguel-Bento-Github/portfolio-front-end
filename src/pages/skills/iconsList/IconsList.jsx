import React from "react";
import IconLi from "./IconLi";
// js
import Vue from "../icons/js/vue.svg";
import Js from "../icons/js/js.svg";
import Node from "../icons/js/node.svg";
import ReactImg from "../icons/js/react.svg";
// css
import Css from "../icons/css/css.svg";
import Styled from "../icons/css/styled.svg";
import Bootstrap from "../icons/css/bootstrap.svg";
import Sass from "../icons/css/sass.svg";
// markup
import Ejs from "../icons/markup/ejs.svg";
import Mustache from "../icons/markup/hb.svg";
import Html from "../icons/markup/html.svg";
// other
import Git from "../icons/others/git.svg";
import Aws from "../icons/others/aws.svg";
import MongoDb from "../icons/others/mongodb.png";
import Npm from "../icons/others/npm.svg";

const jsLinks = {
  react: "https://reactjs.org/",
  vue: "https://vuejs.org/",
  javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  node: "https://www.nodejs.org",
};
const styleLinks = {
  css3: "https://developer.mozilla.org/en-US/docs/Archive/CSS3",
  bootstrap: "https://getbootstrap.com/",
  sass: "https://sass-lang.com/",
  styled: "https://styled-components.com/",
};
const markupLinks = {
  ejs: "https://ejs.co/",
  jsx: "https://reactjs.org/docs/introducing-jsx.html",
  html5: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
  mustache: "https://mustache.github.io/",
};
const otherLinks = {
  aws: "https://aws.amazon.com/",
  git: "https://git-scm.com/",
  mongodb: "https://www.mongodb.com/",
  npm: "https://www.npmjs.com/",
};

function IconsList() {
  return (
    <ul className="skill-list">
      <IconLi
        title="Javascript"
        images={[ReactImg, Vue, Js, Node]}
        name={["React", "Vue", "Javascript", "Node"]}
        links={jsLinks}
      />
      <IconLi
        title="Styling"
        images={[Css, Styled, Bootstrap, Sass]}
        name={["CSS3", "Styled", "Bootstrap", "Sass"]}
        links={styleLinks}
      />
      <IconLi
        title="Markup"
        images={[Ejs, ReactImg, Html, Mustache]}
        name={["EJS", "JSX", "HTML5", "Mustache"]}
        links={markupLinks}
      />
      <IconLi
        title="Other"
        images={[Aws, Git, MongoDb, Npm]}
        name={["AWS", "Git", "MongoDB", "NPM"]}
        links={otherLinks}
      />
    </ul>
  );
}

export default IconsList;

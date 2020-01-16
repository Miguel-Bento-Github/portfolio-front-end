import React, { memo } from "react";
import IconLi from "./IconLi";
// js
import Chart from "../icons/js/chart.png";
import Js from "../icons/js/js.svg";
import Node from "../icons/js/node.svg";
import ReactImg from "../icons/js/react.png";
// css
import Bootstrap from "../icons/css/bootstrap.svg";
import Bulma from "../icons/css/bulma.png";
import Css from "../icons/css/css.svg";
import Sass from "../icons/css/sass.svg";
// markup
import Ejs from "../icons/markup/ejs.svg";
import Hb from "../icons/markup/hb.svg";
import Html from "../icons/markup/html.svg";
// other
import Git from "../icons/others/git.svg";
import Heroku from "../icons/others/heroku.png";
import MongoDb from "../icons/others/mongodb.png";
import Npm from "../icons/others/npm.svg";

const IconsList = () => {
  const jsLinks = {
    React: "https://reactjs.org/",
    Chart: "https://www.chartjs.org/",
    Javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    Node: "https://www.nodejs.org"
  };
  const styleLinks = {
    CSS3: "https://developer.mozilla.org/en-US/docs/Archive/CSS3",
    Bulma: "https://bulma.io/",
    Bootstrap: "https://getbootstrap.com/",
    Sass: "https://sass-lang.com/"
  };
  const markupLinks = {
    EJS: "https://ejs.co/",
    JSX: "https://reactjs.org/docs/introducing-jsx.html",
    HTML5: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    Handlebars: "https://handlebarsjs.com/"
  };
  const otherLinks = {
    Heroku: "https://www.heroku.com/",
    Git: "https://git-scm.com/",
    MongoDB: "https://www.mongodb.com/",
    NPM: "https://www.npmjs.com/"
  };

  return (
    <ul className="skill-list">
      <IconLi
        title="Javascript"
        images={[ReactImg, Chart, Js, Node]}
        name={["React", "Chart", "Javascript", "Node"]}
        links={jsLinks}
      />
      <IconLi
        title="Styling"
        images={[Css, Bulma, Bootstrap, Sass]}
        name={["CSS3", "Bulma", "Bootstrap", "Sass"]}
        links={styleLinks}
      />
      <IconLi
        title="Markup"
        images={[Ejs, ReactImg, Html, Hb]}
        name={["EJS", "JSX", "HTML5", "Handlebars"]}
        links={markupLinks}
      />
      <IconLi
        title="Other"
        images={[Heroku, Git, MongoDb, Npm]}
        name={["Heroku", "Git", "MongoDB", "NPM"]}
        links={otherLinks}
      />
    </ul>
  );
};
export default memo(IconsList);

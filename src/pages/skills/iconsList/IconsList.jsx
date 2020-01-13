import React, { memo } from "react";
// markup
import ejs from "../icons/markup/ejs.png";
import hb from "../icons/markup/hb.svg";
import html from "../icons/markup/html.svg";
// css
import bootstrap from "../icons/css/bootstrap.png";
import bulma from "../icons/css/bulma.png";
import css from "../icons/css/css.svg";
import sass from "../icons/css/sass.svg";
// js
import chart from "../icons/js/chart.png";
import js from "../icons/js/js.svg";
import node from "../icons/js/node.svg";
import react from "../icons/js/react.png";
// other
import github from "../icons/others/github.png";
import heroku from "../icons/others/heroku.png";
import mongodb from "../icons/others/mongodb.png";
import npm from "../icons/others/npm.svg";
import IconLi from "./IconLi";

const IconsList = () => {
  return (
    <ul className="skill-list">
      <IconLi
        title="Javascript"
        img={[react, chart, js, node]}
        name={["React", "Chart.JS", "Javascript", "Node.JS"]}
      />
      <IconLi
        title="Markup"
        img={[ejs, react, html, hb]}
        name={["EJS", "JSX", "HTML5", "Handlebars"]}
      />
      <IconLi
        title="Styling"
        img={[css, bulma, bootstrap, sass]}
        name={["CSS3", "Bulma", "Bootstrap", "Sass"]}
      />
      <IconLi
        title="Other"
        img={[heroku, github, mongodb, npm]}
        name={["Heroku", "Github", "MongoDB", "NPM"]}
      />
    </ul>
  );
};
export default memo(IconsList);

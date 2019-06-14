import React, { Component } from "react";
// markup

import ejs from "../icons/markup/ejs.png";
import hb from "../icons/markup/hb.png";
import html from "../icons/markup/html5.png";
import jsx from "../icons/markup/react.png";
// css
import bootstrap from "../icons/css/bootstrap.png";
import bulma from "../icons/css/bulma.png";
import css from "../icons/css/css-logo.png";
import sass from "../icons/css/sass.png";
// js
import chart from "../icons/js/chart.png";
import js from "../icons/js/javascript.png";
import node from "../icons/js/js.png";
import react from "../icons/js/react.png";
// other
import github from "../icons/others/github.png";
import heroku from "../icons/others/heroku.png";
import mongodb from "../icons/others/mongodb.png";
import npm from "../icons/others/npm.png";
export default class IconsList extends Component {
  render() {
    return (
      <ul className="skill-list">
        <li className="skill-li">
          <h3 className="skill-title">JS</h3>
          <div className="img-container">
            <img className="skill-img shake" src={js} alt="javascript" />
            {/* TODO figcaption */}
            <img className="skill-img shake" src={node} alt="node" />
            <img className="skill-img shake" src={react} alt="react" />
            <img className="skill-img shake" src={chart} alt="chartJS" />
          </div>
        </li>
        <li className="skill-li">
          <h3 className="skill-title">Markup</h3>
          <div className="img-container">
            <img className="skill-img shake" src={jsx} alt="jsx" />
            <img className="skill-img shake" src={html} alt="html" />
            <img className="skill-img shake" src={ejs} alt="ejs" />
            <img className="skill-img shake" src={hb} alt="hb" />
          </div>
        </li>
        <li className="skill-li">
          <h3 className="skill-title">Styling</h3>
          <div className="img-container">
            <img className="skill-img shake" src={css} alt="css" />
            <img className="skill-img shake" src={sass} alt="sass" />
            <img className="skill-img shake" src={bootstrap} alt="boostrap" />
            <img className="skill-img shake" src={bulma} alt="bulma" />
          </div>
        </li>

        <li className="skill-li">
          <h3 className="skill-title">Other</h3>
          <div className="img-container">
            <img className="skill-img shake" src={github} alt="github" />
            <img className="skill-img shake" src={heroku} alt="heroku" />
            <img className="skill-img shake" src={mongodb} alt="mongodb" />
            <img className="skill-img shake" src={npm} alt="npm" />
          </div>
        </li>
      </ul>
    );
  }
}

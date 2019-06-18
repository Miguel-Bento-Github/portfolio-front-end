import React, { Component } from "react";
import IconsList from "./iconsList/IconsList";
import "./skills.css";

export default class Skills extends Component {
  render() {
    return (
      <section className="skills secondBg slit section blur">
        <h1 className="section-header skills-title">Skills</h1>
        <IconsList />
      </section>
    );
  }
}

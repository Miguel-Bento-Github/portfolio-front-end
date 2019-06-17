import React, { Component } from "react";
import "./portfolio.css";
import { getProjects } from "../../api/projects";
import ProjectsList from "./projects/ProjectsList";

export default class Portfolio extends Component {
  state = {};

  componentDidMount() {
    getProjects()
      .then(res => this.setState({ projects: res.data }))
      .catch(err => console.error(err));
  }

  render() {
    const { projects } = this.state;
    if (!projects)
      return (
        <div className="loading-screen blur">
          <p className="loading-content">
            Loading content
            <span>.</span>
            <span>.</span>
            <span>.</span>
            <br /> if it takes too long, the first thing you do, is unplug every
            cable that's plugged in to your computer, then, format your disk and
            buy some replacement parts,
            <a
              style={{ color: "#53a7ea" }}
              href="https://www.youtube.com/watch?v=gRo8FVytTtg"
            >
              {" "}
              here's{" "}
            </a>
            a guide on how you should <b>not</b> behave
          </p>
        </div>
      );
    return (
      <main className="main blur">
        <section className="section secondBg slit">
          <h1 className="section-header ">Portfolio</h1>
          <ul className="projects-container">
            {!projects
              ? null
              : projects.map(c => (
                  <ProjectsList
                    key={c._id}
                    link={c.link}
                    img={c.img}
                    imgTitle={c.title}
                    projectName={c.title}
                  />
                ))}
          </ul>
        </section>
      </main>
    );
  }
}

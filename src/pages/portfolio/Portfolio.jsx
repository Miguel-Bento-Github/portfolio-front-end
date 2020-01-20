import React, { useEffect } from "react";
import "./portfolio.scss";
import ProjectsList from "./projects/ProjectsList";
import LoadingScreen from "./LoadingScreen";
import useDataApi from "../../api/useDataApi";
import FourOhFour from "../fourOhfour/FourOhFour";
import { isDesktopWidth } from "../../helpers/isMobile";
import { getProjects } from "../../api/projects";

export default function Portfolio() {
  const url = process.env.REACT_APP_BACK_URL + "/api";
  const [{ data, isLoading, error }, Fetch] = useDataApi(`${url}/project`);

  useEffect(() => {
    Fetch(url + "/project");
  }, [url, Fetch, isLoading]);

  if (isLoading || !data) {
    return <LoadingScreen />;
  }

  if (!data && error) {
    return <FourOhFour />;
  }
  // TODO delete backend.

  return (
    <>
      {isDesktopWidth() && <div className="second-bg"></div>}
      <main className="main blur">
        <section className={`section ${!isDesktopWidth() ? "second-bg" : ""}`}>
          <h1 className="section-header ">Portfolio</h1>
          <ul className="projects-container">
            {data.map(project => (
              <ProjectsList
                key={project._id}
                link={project.link}
                img={project.img}
                imgTitle={project.title}
                projectName={project.title}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

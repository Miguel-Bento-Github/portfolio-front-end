import React, { useEffect, useState } from 'react';
import './portfolio.scss';
import ProjectsList from './projects/ProjectsList';
import projects from './projects/projects.json';

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    document.title = 'Projects';
    return () => {
      document.title = 'Miguel Bento';
    };
  });

  useEffect(() => {
    const element = document.getElementById(activeProject);
    if (activeProject === 0) {
      document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activeProject]);

  const ProjectsController = (
    <a
      onClick={referenceProject}
      className={`projects-controller${
        activeProject >= projects.length - 1
          ? ' projects-controller-reverse'
          : ''
      }`}
      href={activeProject}
    >
      <i className='fas fa-2x fa-chevron-circle-down'></i>
    </a>
  );

  const Projects = projects.map((project, index) => {
    const {
      _id: { $oid: id },
      link,
      img,
      title,
      description,
    } = project;

    return (
      <ProjectsList
        key={id}
        id={index}
        link={link}
        img={img}
        title={title}
        description={description}
      />
    );
  });

  function referenceProject(e) {
    e.preventDefault();

    if (activeProject >= projects.length - 1) {
      setActiveProject(0);
    } else {
      setActiveProject(activeProject + 1);
    }
  }

  return (
    <>
      <div className='second-bg'></div>
      <main className='main blur'>
        <section className='section'>
          <h1 className='section-header'>Projects</h1>
          <ul className='projects-container'>{Projects}</ul>
          {ProjectsController}
        </section>
      </main>
    </>
  );
}

import React, { useState } from 'react';
import './portfolio.scss';
import projects from './projects/data.json';
import useDocumentTitle from '../../hooks/useDocumentTitle';
import Projects from './projects/Projects';
import checkIfInView from './helpers/checkIfInView';
import { isDesktopWidth } from '../../helpers/isMobile';
require('smoothscroll-polyfill').polyfill();

function Portfolio() {
  useDocumentTitle('Projects');
  const ids = projects.map(({ _id: { $oid: id } }) => id);
  const [projectInView, setProjectInView] = useState('');

  function scrollTo(id) {
    const element = document.getElementById(ids[id]);

    if (ids[id] === ids[ids.length]) {
      document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else {
      if (isDesktopWidth()) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }
  }

  function toNextProject(e) {
    e.preventDefault();

    function findElementInView(id) {
      let project = document.getElementById(id);
      if (project) {
        project = document.getElementById(id);
        const inView = checkIfInView(project.id);
        if (inView) {
          const index = ids.indexOf(project.id);
          setProjectInView(ids[index + 1]);
          scrollTo(index + 1);
        }
      }
    }

    ids.forEach(findElementInView);
  }

  const ProjectsController = (
    <button
      type='button'
      onClick={toNextProject}
      className={`projects-controller${
        ids[ids.length - 1] === projectInView
          ? ' projects-controller-reverse'
          : ''
      }`}
    >
      <i className='fas fa-2x fa-chevron-circle-down'></i>
    </button>
  );

  return (
    <>
      <div className='second-bg' />
      <main className='main'>
        <section id='section' className='section'>
          <h1 className='section-header'>Projects</h1>
          <ul className='projects-container'>
            <Projects projects={projects} />
          </ul>
        </section>
        {ProjectsController}
      </main>
    </>
  );
}

export default Portfolio;

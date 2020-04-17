import React, { useState, useLayoutEffect } from 'react';
import setImageUrl from '../helpers/setImageUrl';
import ProjectsList from './ProjectsList';

function Projects({ projects }) {
  const [lookingAtID, setWatchingID] = useState(-0);

  const totalProjects = projects.map(
    ({ _id: { $oid: id }, link, img, title, description }) => (
      <ProjectsList
        key={id}
        id={id}
        link={link}
        img={setImageUrl(img)}
        title={title}
        description={description}
        setWatchingID={setWatchingID}
        lookingAtID={lookingAtID}
      />
    )
  );

  const [activeProjects, setActiveProjects] = useState(
    totalProjects.slice(0, lookingAtID + 1)
  );

  useLayoutEffect(() => {
    setActiveProjects((state) => [
      ...state,
      totalProjects[activeProjects.length],
    ]);
    // eslint-disable-next-line
  }, [lookingAtID]);

  return activeProjects;
}
export default Projects;

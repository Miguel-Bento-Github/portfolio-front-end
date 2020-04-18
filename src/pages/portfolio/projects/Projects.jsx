import React, { useState, useLayoutEffect } from 'react';
import setImageUrl from '../helpers/setImageUrl';
import ProjectsList from './ProjectsList';

function Projects({ projects, setChevronDirection }) {
  const [lookingAtID, setWatchingID] = useState(null);
  console.log(lookingAtID);

  const totalProjects = projects.map(
    ({ _id: { $oid: id }, link, img, title, description }) => (
      <ProjectsList
        key={id}
        id={id}
        isFirst={id === projects[0]._id.$oid}
        isLast={id === projects[projects.length - 1]._id.$oid}
        link={link}
        img={setImageUrl(img)}
        title={title}
        description={description}
        setWatchingID={setWatchingID}
        lookingAtID={lookingAtID}
        setChevronDirection={setChevronDirection}
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

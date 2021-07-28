import React from 'react';
import Project from './Project';
import data from '../projects.json';

const Projects = (props) => {
  const projectList = data.projects;

  return (
    <>
      <h2>Project Portfolio</h2>
      <div className="project-archive">
        {projectList.map(project => (
          <Project
            title={ project.name }
            url={ project.url }
            description={ project.description }
          />
        ))}
      </div>
    </>
  );
}

export default Projects;
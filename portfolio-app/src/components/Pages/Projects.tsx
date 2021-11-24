import React from 'react';

// Context
import data from '../../projects.json';

// Components
import Project from '../Project/Project';

export interface ProjectsProps {
  title: string
  list: any
}

const Projects = ({
  title = 'Project Portfolio',
  list = data.projects,
}) => {

  return (
    <>
      <h2>{title}</h2>
      <div className="project-archive">
        {list.map(project => (
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
import React from 'react';

export interface ProjectProps {
  title: string
  url: string
  description?: React.ReactNode
}
const Project = ({ title, url, description }: ProjectProps) => {

  return (
    <div className="project-card">
      <h3 className="project-title"><a href={ url }>{ title }</a></h3>
      <div className="project-card-body">
        { description }
      </div>
    </div>
  );
}

export default Project;
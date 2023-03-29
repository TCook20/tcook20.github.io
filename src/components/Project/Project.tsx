import React from 'react';
import classnames from 'classnames';

import './style.scss';

export interface ProjectProps {
  title: string
  url: string
  description?: React.ReactNode
}
const Project = ({ title, url, description }: ProjectProps) => {

  return (
    <div className={ classnames( 'project-card' ) }>
      <h3 className={ classnames( 'project-card__title' ) }>
        <a href={ url }>{ title }</a>
      </h3>
      <div className={ classnames( 'project-card__description' ) }>
        { description }
      </div>
    </div>
  );
}

export default Project;
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Project extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    description: PropTypes.string,
  };

  render() {
    const {
      title,
      url,
      description
    } = this.props;

    return (
      <div className="project-card">
        <h3><a href={ url }>{ title }</a></h3>
        <div class="card-body">
          { description }
        </div>
      </div>
    );
  }
}

export default Project;
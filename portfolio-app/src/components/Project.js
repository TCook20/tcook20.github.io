import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Project extends PureComponent {
  static propTypes = {
    title: PropTypes.string
  };

  render() {
    const {
      title
    } = this.props;

    return (
      <div className="project-card">
        <h3>{ title }</h3>
        <div class="card-body">

        </div>
      </div>
    );
  }
}

export default Project;
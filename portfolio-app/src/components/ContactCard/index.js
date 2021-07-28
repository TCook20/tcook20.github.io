import './style.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactCard extends Component {
  static propTypes = {
    name: PropTypes.string,
    position: PropTypes.string,
    email: PropTypes.string
  }

  render() {
    const {
      name,
      position,
      email
    } = this.props;

    return (
      <div className="contactCard">
        <h2>{ name }</h2>
        <h3>{ position }</h3>
        <p><i className="material-icons">email</i> {email }</p>
        <p><i className="material-icons">description</i> Resume</p>
      </div>
    );
  }
}

export default ContactCard;
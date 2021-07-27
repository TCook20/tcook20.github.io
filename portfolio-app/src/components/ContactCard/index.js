import './style.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactCard extends Component {
  static propTypes = {
    name: PropTypes.string,
    email: PropTypes.string
  }

  render() {
    const {
      name,
      email
    } = this.props;

    return (
      <div className="contactCard">
        <h2>{ name }</h2>
        <p><i className="material-icons">email</i> {email }</p>
      </div>
    );
  }
}

export default ContactCard;
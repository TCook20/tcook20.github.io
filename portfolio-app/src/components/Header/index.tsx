import './style.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header>
      <h1>{ title }</h1>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string
}

Header.defaultProps = {
  title: 'Portfolio Site'
}

export default Header;
import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

const Navigation = (props) => {
  const menuItems = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Projects',
      link: '/projects'
    }
  ]

  return (
    <nav role="navigation" className="primary-navigation navigation">
      <ul className="nav-list">
        {menuItems.map( (item) => 
        <li className="nav-item">
          <NavLink to={item.link}>{ item.title }</NavLink>
        </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
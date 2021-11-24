import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';


export interface NavigationProps {
  list: any
}

const Navigation = ({
  list
}: NavigationProps) => {
  
  return (
    <nav role="navigation" className="primary-navigation navigation">
      <ul className="nav-list">
        {list.map( (item) => 
        <li className="nav-item">
          <NavLink to={item.link}>{ item.title }</NavLink>
        </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
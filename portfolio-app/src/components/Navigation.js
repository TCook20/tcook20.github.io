import React from 'react';

const Navigation = (props) => {
  const menuItems = [
    {
      title: 'Home',
      link: '#'
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
        <li className="nav-item">{ item.title }</li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
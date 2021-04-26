import '../Sidebar.css';
import React from 'react';
import ContactCard from './ContactCard';

const Sidebar = (props) => {
  const menuItems = [
    {
      title: 'Home',
      link: '#'
    },
    {
      title: 'Projects',
      link: '/projects'
    }
  ];

  return (
    <aside>
      <ContactCard />
      <nav role="navigation" className="primary-navigation navigation">
        <ul className="nav-list">
          { menuItems.map( (item) => 
          <li className="nav-item">{ item.title }</li>
          )}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
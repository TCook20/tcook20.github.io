import './style.css';
import React from 'react';

// Components
import ContactCard from '../ContactCard';
import Navigation from '../Navigation';

const Sidebar = (props) => {
  return (
    <aside>
      <ContactCard />
      <Navigation />
    </aside>
  );
}

export default Sidebar;
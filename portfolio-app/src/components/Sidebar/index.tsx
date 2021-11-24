import './style.scss';
import React from 'react';

// Components
import ContactCard from '../ContactCard';
import Navigation from '../Navigation';

const Sidebar = (props) => {
  return (
    <aside>
      <ContactCard
        name={ 'Travis W. Cook' }
        position={ 'Front End Developer' }
        email={ 'twcook2007@gmail.com' }
      />
      <Navigation />
    </aside>
  );
}

export default Sidebar;
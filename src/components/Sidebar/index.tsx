import React from 'react';

import './style.scss';

// Components
import ContactCard from '../ContactCard';
import Navigation from '../Navigation';

const Sidebar = () => {
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
    <aside>
      <ContactCard
        name={ 'Travis W. Cook' }
        position={ 'Front End Developer' }
        socialContacts = { [
          { title: "email", link: "mailto:twcook2007@gmail.com" },
          { title: "GitHub", link: "https://github.com/" },
          { title: "LinkedIn", link: "https://linkedin.com/" }
        ] }
      />
      <Navigation list={ menuItems } />
    </aside>
  );
}

export default Sidebar;
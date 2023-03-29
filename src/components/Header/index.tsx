import React from 'react';

import './style.scss';
export interface HeaderProps {
  title: string
}

const Header = ({ title = 'Portfolio Site' }: HeaderProps) => {
  return (
    <header className='site-header'>
      <h1 className='site-header__title'>{ title }</h1>
    </header>
  );
}

export default Header;
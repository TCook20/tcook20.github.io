import React from 'react';

import './style.scss';
export interface HeaderProps {
  title: string
}

const Header = ({ title = 'Portfolio Site' }: HeaderProps) => {
  return (
    <header>
      <h1>{ title }</h1>
    </header>
  );
}

export default Header;
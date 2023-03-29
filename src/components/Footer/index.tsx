import React from 'react';

import './style.scss';
export interface FooterProps {
  title?: string
}

const Footer = ({ title = 'Portfolio Site' }: FooterProps) => {
  const today = new Date();
  const year = today.getFullYear();
  
  return (
    <footer className='site-footer'>
      <section><p><small>&copy; { year }</small></p></section>
    </footer>
  );
}

export default Footer;
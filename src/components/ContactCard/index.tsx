import React from 'react';
import classnames from 'classnames';
import { SocialList } from './Social';
import './style.scss';

export interface ContactCardProps {
  name: string
  position: string
  email?: string
  cvLink?: string
  image?: string
  socialContacts?: any
}

const ContactCard = ({
  name,
  position,
  email,
  cvLink,
  image,
  socialContacts
}: ContactCardProps ) => {

  return (
    <div className={ classnames( 'contactCard' ) }>
      <img className={ classnames( 'contact-card--image' ) } src={ image } alt={`${ name }`} />
      <h2>{ name }</h2>
      <h3>{ position }</h3>
      <p><i className={ classnames( 'material-icons' ) }>email</i> <a href={`mailto:${ email }`}>{ email }</a></p>
      <p><i className={ classnames( 'material-icons' ) }>description</i> <a href={cvLink}>Resume</a></p>
      <SocialList list={ socialContacts } />
    </div>
  );
}

export default ContactCard;
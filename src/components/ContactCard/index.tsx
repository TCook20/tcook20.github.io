import './style.scss';
import React from 'react';

export interface ContactCardProps {
  name: string
  position: string
  email?: string
  cvLink?: string
  image?: string
}

const ContactCard = ({
  name,
  position,
  email,
  cvLink,
  image,
}: ContactCardProps) => {

  return (
    <div className="contactCard">
      <img className="contact-card--image" src={image} alt={`${name}`} />
      <h2>{ name }</h2>
      <h3>{ position }</h3>
      <p><i className="material-icons">email</i> {email }</p>
      <p><i className="material-icons">description</i> <a href={cvLink}>Resume</a></p>
      
    </div>
  );
}

export default ContactCard;
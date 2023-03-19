import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import classnames from 'classnames';

export interface SocialLinkProps {
  title: string
  src: string
}

export const SocialLink = ({ src, title }: SocialLinkProps ) => {
  const icons: { [key: string]: React.ReactNode } = {
    GitHub: <GitHubIcon />,
    LinkedIn: <LinkedInIcon />
  };

  const SocialIcon = icons[ title ];

  return (
    <a href={ src } title={ `${ title } Profile Link` } className="">{ SocialIcon }</a>
  )
}

export interface SocialListProps {
  list: any
}

export const SocialList = ( { list }: SocialListProps) => {
  const smList = list.map( ( item: { title: string; icon: string; link: string }) => 
    <SocialLink title={ item.title } src={ item.link } />
  );

  return (
    <div className={ classnames( 'social-list' ) }>
      { smList }
    </div>
  )
}
import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export interface SocialIconProps {
  icon: string
  name: string
  title: string
  src: string
}

export const SocialIcon = ({ src, title, name, icon}: SocialIconProps) => {
  return (
    <a href={src} title={title} className={}><svg /></a>
  )
}

export interface SocialListProps {
  list: any
}

export const SocialList = ({list}: SocialListProps) => {
  let smList

  list.map((item) => {
    <SocialIcon name={item.name} icon={item.icon} />
  })
  return (
    <div className='social-list'>
      {smList}
    </div>
  )
}
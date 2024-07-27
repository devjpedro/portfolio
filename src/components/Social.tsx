import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const socials = [
  {
    title: 'Ver meu GitHub',
    icon: <FaGithub />,
    path: 'https://github.com/devjpedro',
  },
  {
    title: 'Ver meu LinkedIn',
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/devjpedro9/',
  },
  {
    title: 'Ver meu Instagram',
    icon: <FaInstagram />,
    path: 'https://www.instagram.com/__buuckz/',
  },
]

interface SocialProps {
  containerStyles: string
  iconStyles: string
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link
          aria-label={item.title}
          key={index}
          href={item.path}
          className={iconStyles}
          target="_blank"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Social

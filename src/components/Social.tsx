import Link from 'next/link'
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const socials = [
  {
    icon: <FaGithub />,
    path: 'https://github.com/devjpedro',
  },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/devjpedro9/',
  },
  {
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

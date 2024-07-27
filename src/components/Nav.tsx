'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    name: 'início',
    path: '/',
  },
  {
    name: 'sobre',
    path: '/resume',
  },
  {
    name: 'projetos',
    path: '/projects',
  },
  {
    name: 'contato',
    path: '/contact',
  },
]

const Nav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`border-b-2 ${link.path === pathname ? 'border-accent text-accent' : 'border-transparent'} font-medium capitalize transition-all duration-100 hover:text-accent`}
          >
            {link.name}
          </Link>
        )
      })}
    </nav>
  )
}

export default Nav

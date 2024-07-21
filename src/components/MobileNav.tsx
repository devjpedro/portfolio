'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CiMenuFries } from 'react-icons/ci'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

const links = [
  {
    name: 'início',
    path: '/',
  },
  {
    name: 'serviços',
    path: '/services',
  },
  {
    name: 'sobre',
    path: '/resume',
  },
  {
    name: 'projetos',
    path: '/work',
  },
  {
    name: 'contato',
    path: '/contact',
  },
]

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              devjpedro<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav

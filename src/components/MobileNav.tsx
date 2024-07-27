'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { CiMenuFries } from 'react-icons/ci'
import { MobileModeToggle } from './MobileModeToggle'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

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

const MobileNav = () => {
  // states
  const [isOpen, setIsOpen] = useState(false)
  // hooks
  const pathname = usePathname()

  // funcs
  const handleLinkClick = () => setIsOpen(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex items-center justify-center"
        aria-label="Abrir menu"
      >
        <CiMenuFries className="text-[32px] text-accent" />
        <span className="sr-only">Abrir menu</span>
      </SheetTrigger>
      <SheetContent className="flex flex-col ">
        {/* logo */}
        <div className="mb-40 mt-32 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              devjpedro<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="-mt-4 flex flex-col items-center justify-center gap-8">
          <MobileModeToggle />

          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${link.path === pathname && 'border-b-2 border-accent text-accent'} text-xl capitalize transition-all hover:text-accent`}
              onClick={handleLinkClick}
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

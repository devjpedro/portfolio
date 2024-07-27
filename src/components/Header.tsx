import Link from 'next/link'

// components
import MobileNav from './MobileNav'
import { ModeToggle } from './ModeToggle'
import Nav from './Nav'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className="py-8 xl:py-12 ">
      <div className="container mx-auto flex items-center justify-between">
        {/* logo */}
        <Link href="/" className="z-10">
          <h1 className="text-4xl font-semibold">
            devjpedro<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="z-10 hidden items-center gap-8 xl:flex">
          <Nav />
          <Link href="/contact">
            <Button>Fale comigo</Button>
          </Link>
          <ModeToggle />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  )
}

export default Header

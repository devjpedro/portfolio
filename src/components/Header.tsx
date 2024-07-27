import Link from 'next/link'

// components
import MobileNav from './MobileNav'
import Nav from './Nav'
import { Button } from './ui/button'

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="z-10">
          <h1 className="text-4xl font-semibold">
            devjpedro<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8 z-10">
          <Nav />
          <Link href="/contact">
            <Button>Fale comigo</Button>
          </Link>
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

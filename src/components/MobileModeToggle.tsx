'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'

export function MobileModeToggle() {
  // hooks
  const { theme, setTheme } = useTheme()

  // funcs
  const handleClickToggleTheme = () => {
    return theme === 'dark' ? setTheme('light') : setTheme('dark')
  }

  return (
    <Button variant="circle" size="circle" onClick={handleClickToggleTheme}>
      <Sun className="size-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

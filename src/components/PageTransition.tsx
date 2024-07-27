'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ReactNode } from 'react'

const PageTransition = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence>
      <div>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 0.5,
              duration: 0.4,
              ease: 'easeInOut',
            },
          }}
          className="pointer-events-none fixed top-0 h-screen w-screen bg-light-primary dark:bg-dark-primary"
        />
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition

import { motion } from 'framer-motion'

// variants
const stairAnimation = {
  initial: {
    top: '0%',
  },
  animate: {
    top: '100%',
  },
  exit: {
    top: ['100%', '0%'],
  },
}

// calc the reverse index for staggred delay
const reverseIndex = (index: number) => {
  const totalSteps = 6

  return totalSteps - index - 1
}

const Stairs = () => {
  return (
    <>
      {/* render 6 motion divs, each representing a step of the stairs */}

      {[...Array(6)].map((_, index) => {
        return (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: 'easeInOut',
              delay: reverseIndex(index) * 0.1,
            }}
            className="relative size-full bg-accent-200"
          />
        )
      })}
    </>
  )
}

export default Stairs

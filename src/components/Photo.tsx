'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 0.5,
            duration: 0.4,
            ease: 'easeIn',
          },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 0.5,
              duration: 0.4,
              ease: 'easeInOut',
            },
          }}
          className="size-[298px] xl:size-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.png"
            alt=""
            quality={80}
            priority
            fill
            className="object-contain overflow-hidden"
          />
        </motion.div>

        {/* circle */}
        <motion.svg
          className="size-[300px] xl:size-[506px] mix-blend-lighten"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="254"
            r="250"
            stroke="#8b5cf6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '24 10 0 0' }}
            animate={{
              strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  )
}

export default Photo

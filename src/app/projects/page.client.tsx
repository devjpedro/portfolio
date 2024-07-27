'use client'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import WorkSliderBtns from '@/components/WorkSliderBtns'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import 'swiper/css'
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react'

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Coffee Delivery',
    description:
      'O Coffee Delivery se trata de uma aplicação para gerenciar um carrinho de compras de uma cafeteria fictícia.',
    stack: [
      {
        name: 'Vite',
      },
      {
        name: 'React.Js',
      },
      {
        name: 'TypeScript',
      },
    ],
    image: '/assets/work/coffeedelivery.png',
    live: 'https://coffeedeliveryjp.netlify.app/',
    github: 'https://github.com/devjpedro/coffee-delivery',
  },
  {
    num: '02',
    category: 'frontend',
    title: 'React Stock',
    description:
      'React Stock é um gestor de estoque construído com as tecnologias mais recentes. Ele permite que os usuários gerenciem seu estoque de forma eficiente e eficaz.',
    stack: [
      {
        name: 'Vite',
      },
      {
        name: 'ReactJS',
      },
      {
        name: 'TypeScript',
      },
      {
        name: 'Firebase',
      },
      {
        name: 'MUI',
      },
    ],
    image: '/assets/work/reactstock.png',
    live: 'https://reactstockjp.netlify.app/',
    github: 'https://github.com/devjpedro/react-stock',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'Ignite Todo',
    description:
      'O Ignite Todo é uma aplicação de controle de tarefas no estilo to-do list.',
    stack: [
      {
        name: 'Vite',
      },
      {
        name: 'React.Js',
      },
      {
        name: 'TypeScript',
      },
    ],
    image: '/assets/work/todo.png',
    live: 'https://ignitetodojp.netlify.app/',
    github: 'https://github.com/devjpedro/todo',
  },
]

const ProjectsClient = () => {
  // states
  const [project, setProject] = useState(projects[0])

  // funcs
  const handleSlideChange = (swiper: SwiperClass) => {
    // get current slide index
    const currentIndex = swiper.activeIndex
    // update project state based an current slide index
    setProject(projects[currentIndex])
  }

  return (
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
      className="flex min-h-[80vh] flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-[30px] xl:flex-row">
          <div className="flex w-full flex-col xl:h-[460px] xl:w-1/2 xl:justify-between">
            <div className="flex h-1/2 flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-outline dark:text-outline-dark text-8xl font-extrabold leading-none text-transparent">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold capitalize leading-none text-dark-primary transition-all duration-500 group-hover:text-accent dark:text-light-primary">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-dark-primary/60 dark:text-light-primary/60">
                {project.description}
              </p>
              {/* stack */}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        aria-label="Deploy do projeto"
                        className="group flex size-[70px] items-center justify-center rounded-full bg-zinc-200 dark:bg-white/5"
                      >
                        <BsArrowUpRight className="text-3xl text-dark-primary group-hover:text-accent dark:text-light-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Deploy</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github project button */}
                <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        aria-label="Repositório no GitHub"
                        className="group flex size-[70px] items-center justify-center rounded-full bg-zinc-200 dark:bg-white/5"
                      >
                        <BsGithub className="text-3xl text-dark-primary group-hover:text-accent dark:text-light-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Repositório</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="mb-12 xl:h-[520px]"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="group relative flex h-[460px] items-center justify-center">
                    {/* overlay */}
                    <div className="absolute inset-y-0 z-10 size-full bg-black/10"></div>
                    {/* image */}
                    <div className="relative size-full">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        className="rounded-md object-cover"
                        priority
                        quality={80}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 
                bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-light-primary dark:text-dark-primary text-[22px] size-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectsClient

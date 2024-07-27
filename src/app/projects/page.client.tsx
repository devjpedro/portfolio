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
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
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
                        className="size-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
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
                        className="size-[70px] rounded-full bg-white/5 flex justify-center items-center group"
                      >
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
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
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 size-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative size-full">
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        className="object-cover rounded-md"
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
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] size-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectsClient

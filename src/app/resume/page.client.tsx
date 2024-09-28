'use client'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { motion } from 'framer-motion'
import { FaCss3, FaFigma, FaGithub, FaHtml5, FaReact } from 'react-icons/fa'
import {
  SiJavascript,
  SiMui,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'

// about data
const about = {
  title: 'Sobre mim',
  description:
    'Sou um entusiasta da tecnologia, sempre em busca de aprender coisas novas. Nos meus momentos livres, gosto de jogar, especialmente LoL e Valorant. Também sou fã de animes e séries, mas atualmente estou acompanhando apenas o mangá de One Piece.',
  info: [
    {
      fieldName: 'Nome',
      fieldValue: 'João Pedro',
    },
    {
      fieldName: 'Idade',
      fieldValue: '19 anos',
    },
    {
      fieldName: 'Celular',
      fieldValue: '(61) 99321-2096',
    },
    {
      fieldName: 'Email',
      fieldValue: 'joaopedross.ti9@gmail.com',
    },
    {
      fieldName: 'Discord',
      fieldValue: 'buckz_',
    },
    {
      fieldName: 'Experiência',
      fieldValue: '1 Ano',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Disponível',
    },
    {
      fieldName: 'Localização',
      fieldValue: 'Valparaíso - GO',
    },
  ],
}

// experience data
const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'Minha experiência',
  description:
    'Ainda estou no início da minha carreira como desenvolvedor, mas já adquiri valiosas habilidades e experiências. Minha primeira oportunidade na área me permitiu crescer significativamente e estou empolgado para explorar novos desafios e expandir meus conhecimentos.',
  items: [
    {
      company: 'Play Tecnologia',
      position: 'Desenvolvedor Front-end Trainee',
      duration: '2023 - Atual',
    },
  ],
}

// education data
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'Minha educação',
  description:
    'Minha formação acadêmica e cursos complementares me proporcionaram uma base sólida em desenvolvimento de sistemas e design. Com estudos em diversas instituições, estou sempre buscando expandir meus conhecimentos e habilidades na área de tecnologia.',
  items: [
    {
      institution: 'Universidade Estácio de Sá',
      degree: 'Análise e Desenvolvimento de Sistemas',
      duration: '2023 - 2025',
    },
    {
      institution: 'Origamid',
      degree: 'UX / UI Designer & Desenvolvedor Front-end',
      duration: '2022',
    },
    {
      institution: 'Udemy',
      degree: 'Curso de Javascript e Typescript',
      duration: '2022',
    },
    {
      institution: 'Udemy',
      degree: 'Curso de React.js & Next.js',
      duration: '2023',
    },
    {
      institution: 'OneBitCode',
      degree: 'Fullstack Bootcamp',
      duration: '2023',
    },
    {
      institution: 'Rocketseat',
      degree: 'Ignite - React',
      duration: '2023',
    },
  ],
}

// skills data
const skills = {
  title: 'Minhas habilidades',
  description:
    'Tenho experiência com uma variedade de tecnologias e ferramentas que me permitem desenvolver interfaces modernas e funcionais. Aqui estão algumas das principais habilidades que adquiri ao longo da minha carreira.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'HTML 5',
    },
    {
      icon: <FaCss3 />,
      name: 'CSS 3',
    },
    {
      icon: <SiJavascript />,
      name: 'JavaScript',
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
    },
    {
      icon: <FaReact />,
      name: 'React.js',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <SiTailwindcss />,
      name: 'Tailwind CSS',
    },
    {
      icon: <SiMui />,
      name: 'MUI',
    },
    {
      icon: <FaGithub />,
      name: 'GitHub',
    },
    {
      icon: <FaFigma />,
      name: 'Figma',
    },
  ],
}

const ResumeClient = () => {
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
      className="flex min-h-[80vh] items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col gap-[60px] xl:flex-row"
        >
          <TabsList className="mx-auto flex w-full max-w-[380px] flex-col gap-6 xl:mx-0">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full xl:pb-8">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="mx-auto max-w-[600px] leading-6 text-dark-primary/60 dark:text-light-primary/60 xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex h-[184px] flex-col items-center justify-center gap-1 rounded-xl bg-light-secondary px-10 py-6 dark:bg-dark-secondary lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="size-[6px] rounded-full bg-accent"></span>
                          <p className="text-dark-primary/60 dark:text-light-primary/60">
                            {item.company}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="mx-auto max-w-[600px] leading-6 text-dark-primary/60 dark:text-light-primary/60 xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center gap-1 rounded-xl bg-light-secondary px-10 py-6 dark:bg-dark-secondary lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="min-h-[60px] max-w-[260px] text-center text-xl lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="size-[6px] rounded-full bg-accent"></span>
                          <p className="text-dark-primary/60 dark:text-light-primary/60">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-auto max-w-[600px] leading-6 text-dark-primary/60 dark:text-light-primary/60 xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="group flex h-[150px] w-full items-center justify-center rounded-xl bg-light-secondary dark:bg-dark-secondary">
                            <div className="text-6xl transition-all duration-300 group-hover:text-accent">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="mx-auto max-w-[600px] leading-6 text-dark-primary/60 dark:text-light-primary/60 xl:mx-0">
                  {about.description}
                </p>
                <ul className="mx-auto grid max-w-[620px] grid-cols-1 gap-y-6 xl:mx-0 xl:grid-cols-2">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-wrap items-center justify-center gap-4 sm:flex-nowrap xl:justify-start"
                    >
                      <span className="text-dark-primary/60 dark:text-light-primary/60">
                        {item.fieldName}
                      </span>
                      <span className="text-lg">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default ResumeClient

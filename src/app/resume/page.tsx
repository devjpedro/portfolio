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

const Resume = () => {
  return (
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experiência</TabsTrigger>
            <TabsTrigger value="education">Educação</TabsTrigger>
            <TabsTrigger value="skills">Habilidades</TabsTrigger>
            <TabsTrigger value="about">Sobre mim</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-6">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="size-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-6">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="size-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
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
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-6">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
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
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 leading-6">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4 flex-wrap sm:flex-nowrap"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
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

export default Resume

'use client'

import CountUp from 'react-countup'

const stats = [
  {
    id: 1,
    num: 1,
    text: 'Ano de Experiência',
  },
  {
    id: 2,
    num: 2,
    text: 'Projetos entregues',
  },
  {
    id: 3,
    num: 7,
    text: 'Tecnologias dominadas',
  },
  {
    id: 4,
    num: 0,
    text: 'Commits no GitHub',
  },
]

const Stats = ({ githubCommits }: { githubCommits: number }) => {
  return (
    <section className="pb-12 pt-4 xl:py-0">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-[80vw] flex-wrap gap-6 xl:max-w-none">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex flex-1 items-center justify-center gap-4 xl:justify-start"
            >
              <CountUp
                end={item.id === 4 ? githubCommits : item.num}
                duration={5}
                delay={1}
                className="text-4xl font-extrabold xl:text-6xl"
              />
              <p
                className={`${item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-dark-secondary/80 dark:text-light-secondary/80`}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats

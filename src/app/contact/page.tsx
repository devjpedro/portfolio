'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Celular',
    description: '(61) 99321-2096',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'joaopedross.ti9@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Endereço',
    description: 'Rua 20, Quadra 28, Casa 25 - Jardim Oriente',
  },
]

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
              <p className="text-white/60 leading-6">
                Se você está procurando um desenvolvedor dedicado, você está no
                lugar certo. Estou sempre em busca de novos desafios e
                oportunidades para colaborar em projetos inovadores. <br /> Por
                favor, preencha o formulário abaixo e entrarei em contato com
                você o mais breve possível.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Nome" />
                <Input placeholder="Sobrenome" />
                <Input type="email" placeholder="Email" />
                <Input type="tel" placeholder="Número de Celular" />
              </div>
              {/* textarea */}
              <Textarea
                className="h-[200px]"
                placeholder="Digite sua mensagem aqui"
              />
              {/* button */}
              <Button size="md" className="self-start">
                Enviar mensagem
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="size-[52px] xl:size-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-xs sm:text-base text-white/60">
                      {item.title}
                    </p>
                    <h3 className="text-sm sm:text-lg">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact

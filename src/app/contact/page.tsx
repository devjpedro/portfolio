'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import emailjs from '@emailjs/browser'
import { zodResolver } from '@hookform/resolvers/zod'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { mask } from 'remask'
import { toast } from 'sonner'
import * as z from 'zod'

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
    description: 'Valparaíso de Goiás',
  },
]

/* schema form */
const FormSchema = z.object({
  name: z
    .string()
    .min(1, 'É necessário informar o nome')
    .min(2, 'O nome deve ter no mínimo 2 caracteres'),
  lastname: z
    .string()
    .min(1, 'É necessário informar o sobrenome')
    .min(2, 'O sobrenome deve ter no mínimo 2 caracteres'),
  email: z
    .string()
    .min(1, 'É necessário informar o email')
    .email('O email informado é inválido'),
  phone: z.string().min(1, 'É necessário informar o celular'),
  message: z
    .string()
    .min(1, 'É necessário informar a mensagem')
    .min(2, 'A mensagem deve ter no mínimo 2 caracteres'),
})

type FormSchemaType = z.infer<typeof FormSchema>

/* send email function */
const sendEmail = async (templateParams: Record<string, unknown>) => {
  return emailjs.send(
    'service_4erzeve',
    'template_fg6jzwb',
    templateParams,
    'lmFPVSLhPE47A_FRD',
  )
}

const Contact = () => {
  // states
  const [isLoadingBtn, setIsLoadingBtn] = useState(false)

  // hooks
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      lastname: '',
      message: '',
      name: '',
      phone: '',
    },
  })

  // funcs
  const onSubmitFormContact = async ({
    email,
    lastname,
    message,
    name,
    phone,
  }: FormSchemaType) => {
    setIsLoadingBtn(true)

    const templateParams = {
      email,
      lastname,
      message,
      name,
      phone,
    }

    toast.promise(sendEmail(templateParams), {
      loading: 'Enviando email...',
      success: () => {
        form.reset()
        return 'Email enviado com sucesso!'
      },
      error: 'Erro ao enviar email. Por favor tente novamente.',
      finally: () => setIsLoadingBtn(false),
    })
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className="py-6"
    >
      <Form {...form}>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:h-[54%] order-1 xl:order-none">
              <form
                className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
                onSubmit={form.handleSubmit(onSubmitFormContact)}
              >
                <h3 className="text-4xl text-accent">Vamos trabalhar juntos</h3>
                <p className="text-white/60 leading-6">
                  Se você está procurando um desenvolvedor dedicado, você está
                  no lugar certo. Estou sempre em busca de novos desafios e
                  oportunidades para colaborar em projetos inovadores. <br />{' '}
                  Por favor, preencha o formulário abaixo e entrarei em contato
                  com você o mais breve possível.
                </p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastname"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Sobrenome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input type="email" placeholder="Email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="Celular"
                            {...field}
                            onChange={(e) =>
                              field.onChange(
                                mask(e.target.value, '(99) 99999-9999'),
                              )
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                {/* textarea */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          className="h-[200px]"
                          placeholder="Digite sua mensagem aqui"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* button */}
                <Button
                  type="submit"
                  size="md"
                  className="self-start disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-accent"
                  disabled={isLoadingBtn}
                >
                  Enviar mensagem
                </Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-2 xl:order-none mb-8 xl:mb-0">
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
      </Form>
    </motion.section>
  )
}

export default Contact

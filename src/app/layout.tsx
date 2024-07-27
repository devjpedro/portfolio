import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

// components
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'
import { ThemeProvider } from '@/components/theme-provider'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
})

export const metadata: Metadata = {
  title: 'Portfólio | devjpedro',
  description:
    'Olá, sou João Pedro, um desenvolvedor de software com experiência em criar aplicações web modernas e funcionais. Proficiente em diversas tecnologias de front-end.',
  icons: {
    icon: '/assets/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${jetbrainsMono.variable} bg-light-primary text-dark-primary *:selection:text-light-primary dark:bg-dark-primary dark:text-light-primary *:selection:dark:text-dark-primary`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />
          <Header />
          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}

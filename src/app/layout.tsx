import type { Metadata } from 'next'
// eslint-disable-next-line camelcase
import { JetBrains_Mono } from 'next/font/google'
import { Toaster } from 'sonner'
import './globals.css'

// components
import Header from '@/components/Header'
import PageTransition from '@/components/PageTransition'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono',
})

export const metadata: Metadata = {
  title: 'Portfólio',
  description: 'Meu portfólio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={jetbrainsMono.variable}>
        <Toaster />
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}

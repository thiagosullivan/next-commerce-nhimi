import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import clsx from 'clsx'
import { ClerkProvider } from '@clerk/nextjs'
import { ptBR } from '@clerk/localizations'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next E-commerce 13',
  description: 'Next E-commerce 13',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="en">
        <body className={clsx(inter.className, 'bg-slate-700')}>
          <Navbar />
          <main className='h-screen p-16'>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}

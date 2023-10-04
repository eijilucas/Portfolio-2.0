import './globals.css'
import type { Metadata } from 'next'
import { Saira } from 'next/font/google'

const saira = Saira({ 
  subsets: ['latin'],
  weight: ['200', '400', '600', '700']
})

export const metadata: Metadata = {
  title: 'Portfólio | Lucas Eiji',
  description: 'Portfólio criado com NextJs e React',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>{children}</body>
    </html>
  )
}

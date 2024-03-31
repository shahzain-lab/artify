import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/components/app/Provider'
import MainLayout from '@/layout/MainLayout'
{
  /* Custom CSS */
}
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artify - Build and collaborate with AI',
  description: 'All AI tools and your team in single place. create workspaces for your project'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  )
}

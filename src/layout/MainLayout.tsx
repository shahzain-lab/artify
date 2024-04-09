import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'

{
  /* Components */
}
import Sidebar from '@/modules/sidebar'
{
  /* Utils */
}
import Appbar from '@/modules/sidebar/Appbar'

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider defaultTheme='dark' attribute="class">
      <main className='dark:bg-noble-black-700 bg-gray-50 min-h-screen flex w-full gap-3 relative'>
        <Sidebar />
        <div className='w-full flex flex-col items-end justify-start'>
          <Appbar />
          {children}
        </div>
      </main>
    </ThemeProvider>
  )
};

export default MainLayout

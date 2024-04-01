import React, { PropsWithChildren } from 'react'
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
    <main className='bg-noble-black-700 min-h-screen flex w-full gap-3 relative'>
      <Sidebar />
      <div className='w-full flex flex-col items-end justify-start'>
        <Appbar />
        {children}
      </div>
    </main>
  )
}

export default MainLayout

import React from 'react'
{
  /* Components */
}
import Workspace from './workspace'
import Divider from '@/components/elements/Divider'
import Navigation from './navigation'

const Headers = () => {
  return (
    <div className='w-full flex flex-col justify-between dark:bg-noble-black-800 bg-white rounded-[12px] h-[190px]'>
      <Workspace />
      <Divider />
      <Navigation />
    </div>
  )
}

export default Headers

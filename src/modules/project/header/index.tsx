import React from 'react'
import Workspace from './workspace'
import Divider from '@/components/elements/Divider'
import Navigation from './navigation'

const Headers = () => {
  return (
    <div className='w-full md:w-[79%] flex flex-col justify-between bg-dark-800 rounded-[12px] h-[190px]'>
        <Workspace />
        <Divider />
        <Navigation />
    </div>
  )
}

export default Headers
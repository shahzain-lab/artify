import React from 'react'
import Workspace from './workspace'
import Divider from '@/components/ui/Divider'

const Headers = () => {
  return (
    <div className='w-full bg-dark-800 rounded-[12px] h-[190px]'>
        <Workspace />
        <Divider />
    </div>
  )
}

export default Headers
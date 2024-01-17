import React from 'react'
import Profile from './profile'
import Divider from '@/components/ui/Divider'
import General from './general'
import Project from './project'
import Settings from './settings'

const Sidebar = () => {
  return (
    <div className='w-[20%] fixed h-[96%] flex flex-col justify-between px-3 py-2 bg-dark-800 rounded-[12px]'>
        <div>
            <Profile />
            <Divider />
            <General />
            <Divider />
            <Project />
        </div>
        <Settings />
    </div>
  )
}

export default Sidebar
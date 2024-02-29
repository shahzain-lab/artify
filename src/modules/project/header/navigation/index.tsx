'use client'
import React from 'react'
import { menuItems } from './items'
import RoutePanel from '../RoutePanel'

const Navigation = () => {
  return (
    <RoutePanel
      className='md:px-6 px-2 md:overflow-x-auto md:overflow-y-auto overflow-x-scroll overflow-y-hidden'
      menuItems={menuItems}
    />
  )
}

export default Navigation
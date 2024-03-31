'use client'
import React from 'react'
import RoutePanel from '../../../../components/app/RoutePanel'
import { Url } from 'next/dist/shared/lib/router/router'
{
  /* Utils */
}
import { Artificium, Chat, GetStarted, Library } from '@/utils/icons'
export interface IMenu {
  title: string
  path: Url
  icon?: JSX.Element
  tag?: string
}
const Navigation = () => {
  const menuItems: IMenu[] = [
    {
      title: 'Get Started',
      icon: <GetStarted className='w-5 h-5' />,
      path: '/project'
    },
    {
      title: 'Artificium',
      icon: <Artificium className='w-5 h-5' />,
      path: '/project/artificium'
    },
    {
      title: 'Chat',
      icon: <Chat className='w-5 h-5' />,
      path: '/project/chat'
    },
    {
      title: 'Library',
      icon: <Library className='w-5 h-5' />,
      path: '/project/library'
    }
  ]

  return (
    <RoutePanel
      className='md:px-6 px-2 md:overflow-x-auto md:overflow-y-auto overflow-x-scroll no-scrollbar overflow-y-hidden'
      menuItems={menuItems}
    />
  )
}

export default Navigation

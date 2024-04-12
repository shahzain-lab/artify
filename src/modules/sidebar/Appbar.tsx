"use client"
import AdvancedDropdown from '@/components/elements/AdvancedDropdown'
import { Button } from '@/components/elements/Button'
import Ping from '@/components/elements/Ping'
import ThemeChanger from '@/components/theme/theme'
import { PUBLIC_ROUTES } from '@/lib/publicRoutes'
import { Notification } from '@/utils/icons'
import { Theme } from 'emoji-picker-react'
import { usePathname } from 'next/navigation'
import React from 'react'

const Appbar = () => {
  const pathname = usePathname()

  return (
    <>
      {PUBLIC_ROUTES.includes(pathname) ? null : (
        <div className='no-overlay dark:bg-noble-black-800 bg-white w-full md:w-[80%] z-30 shadow-sm rounded-b-[15px] sticky top-0 gap-2 right-0 flex py-2 justify-end items-center px-5'>
          <span className='dark:bg-noble-black-800 bg-gray-200 text-black rounded-2xl sticky top-0 hover:bg-red-400 hover:text-white right-10 flex py-1 justify-end items-center px-5'>
            <button className='rounded-md  px-2 py-1'><ThemeChanger /></button>
          </span>
          <AdvancedDropdown
            header={{
              title: 'Notifications',
              tag: '5'
            }}
            list={[
              { title: 'Hello', desc: '' },
              { title: 'Hello', desc: '' },
              { title: 'Hello', desc: '' }
            ]}
            footer={<Button>See All</Button>}
          >
            <Ping>
              <Notification className='dark:text-[#ccc] text-black h-10 w-7' />
            </Ping>
          </AdvancedDropdown>
        </div>
      )}
    </>
  )
}

export default Appbar

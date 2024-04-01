'use client'
import AdvancedDropdown from '@/components/elements/AdvancedDropdown'
import { Button } from '@/components/elements/Button'
import Ping from '@/components/elements/Ping'
import { PUBLIC_ROUTES } from '@/lib/publicRoutes'
import { Notification } from '@/utils/icons'
import { usePathname } from 'next/navigation'
import React from 'react'

const Appbar = () => {
  const pathname = usePathname()
  return (
    <>
      {PUBLIC_ROUTES.includes(pathname) ? null : (
        <div className='bg-noble-black-800 w-[80%] sticky top-0 right-0 flex py-2 justify-end items-center px-5'>
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
              <Notification className='text-[#ccc] h-10 w-7' />
            </Ping>
          </AdvancedDropdown>
        </div>
      )}
    </>
  )
}

export default Appbar

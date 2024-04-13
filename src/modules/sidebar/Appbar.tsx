"use client"
import AdvancedDropdown from '@/components/elements/AdvancedDropdown'
import { Button } from '@/components/elements/Button'
import Ping from '@/components/elements/Ping'
import ThemeChanger from '@/components/theme/theme'
import { PUBLIC_ROUTES } from '@/lib/publicRoutes'
import { Notification } from '@/utils/icons'
import Image from 'next/image'
import menubar from '@/assets/icons/menubar.svg'
import { usePathname } from 'next/navigation'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setOpenMobileMenu } from '@/model/store/slices/navigationSlice'
import { cn } from '@/lib/utils'
import { useSelector } from 'react-redux'
import { RootState } from '@/model/store'

const Appbar = () => {
  const pathname = usePathname()
  const dispatch = useDispatch()
  const openMobileMenu = useSelector((state: RootState) => state.navigation.openMobileMenu)

  return (
    <>
      {PUBLIC_ROUTES.includes(pathname) ? null : (
        <div className={cn(
          'no-overlay',
          'flex justify-between items-center',
          'dark:bg-noble-black-800 bg-white w-full md:w-[80%] px-5 z-30 shadow-sm rounded-b-[15px] sticky top-0 gap-2 right-0'
        )}>
          <div>
            <Image
              src={menubar}
              alt='share'
              width={35}
              height={35}
              className='md:hidden dark:hover:bg-noble-black-600  p-2 rounded-[8px]'
              onClick={() => dispatch(setOpenMobileMenu(!openMobileMenu))}
            />
          </div>
          <div className='flex justify-end items-center gap-3'>
            <ThemeChanger />
            <AdvancedDropdown
              header={{
                title: 'Notifications',
                tag: '5'
              }}
              list={[
                { title: 'Ryan Lee', desc: 'Started following you' },
                { title: 'Lily Patel', desc: 'You have new message' },
                { title: 'Project Approved 🚀', desc: 'Your project has been approved' }
              ]}
              footer={<Button className='w-full'>See All</Button>}
            >
              <Ping>
                <Notification className='dark:text-[#ccc] text-gray-600 h-10 mt-2 w-7' />
              </Ping>
            </AdvancedDropdown>
          </div>
        </div>
      )}
    </>
  )
}

export default Appbar

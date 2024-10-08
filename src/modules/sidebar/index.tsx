'use client'
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/model/store'
import { setOpenMobileMenu } from '@/model/store/slices/navigationSlice'
{
  /* Components */
}
import Profile from './profile'
import Divider from '@/components/elements/Divider'
import General from './general'
import Project from './project'
import Settings from './settings'
import Typography from '@/components/elements/Typography'
import ListPages from './listPages'
import ListTask from './task'
{
  /* Utils */
}
import { preventScroll } from '@/lib/preventScroll'
import { CheveronDown, CheveronRight, Cross } from '@/utils/icons'
import { usePathname } from 'next/navigation'
import { PUBLIC_ROUTES } from '@/lib/publicRoutes'
import { hideElementHandler } from '@/lib/hideElement'
import Elements from './elements'
import Core from './core'

const Sidebar = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState<number | null>(1)
  const pathname = usePathname()
  const openMobileMenu = useSelector((state: RootState) => state.navigation.openMobileMenu)
  useEffect(() => {
    if (openMobileMenu) {
      preventScroll()
    }
    // Cleanup function to restore scroll position when the modal is closed
    return () => {
      preventScroll(true)
    }
  }, [openMobileMenu])
  const handleClose = () => {
    dispatch(setOpenMobileMenu(false))
  }
  const modules = [
    {
      title: 'General',
      Route: General
    },
    {
      title: 'Projects',
      Route: Project
    },
    {
      title: 'Task',
      Route: ListTask
    },
    {
      title: 'Pages',
      Route: ListPages
    },
    {
      title: 'Elements',
      Route: Elements
    },
    {
      title: 'Utils',
      Route: Core
    }
  ]

  useEffect(() => {
    if (openMobileMenu) {
      hideElementHandler('none', ['.setting-widget'])
    }
    return () => {
      hideElementHandler('', ['.setting-widget'])
    }
  }, [openMobileMenu])

  return (
    <>
      {PUBLIC_ROUTES.includes(pathname) ? null : (
        <div
          className={`${openMobileMenu ? 'flex w-[80%] z-30 fixed h-screen overflow-y-scroll pb-4 no-scrollbar' : 'hidden'} md:w-[20%] md:overflow-y-scroll no-scrollbar md:fixed md:h-[100%] md:flex flex-col justify-between px-3 py-2 dark:bg-noble-black-800 shadow-md bg-white dark:text-white text-black rounded-[1px]`}
        >
          {openMobileMenu && (
            <div className='w-full h-screen fixed top-0 left-0 dark:bg-bg-layer backdrop-blur-sm'>
              <p
                onClick={handleClose}
                className='absolute top-4 right-4 border-2 border-noble-black-500 p-1 rounded-[8px]'
              >
                <Cross />
              </p>
            </div>
          )}
          <div className='z-20 md:z-auto'>
            <Profile />
            {modules.map((module, i) => (
              <Fragment key={i}>
                <Divider className='dark:bg-noble-black-500 bg-gray-300' />
                <div className='py-4'>
                  <div
                    onClick={() => setActive(active === i ? null : i)}
                    className='my-3 cursor-pointer flex justify-between items-center'
                  >
                    <Typography variant='semibold' className='text-[12px] dark:text-noble-black-400 text-black'>
                      {module.title}
                    </Typography>
                    {active === i ? <CheveronDown /> : <CheveronRight />}
                  </div>
                  {active === i && <module.Route />}
                </div>
              </Fragment>
            ))}
          </div>
          <Settings />
        </div>
      )}
    </>
  )
}

export default Sidebar

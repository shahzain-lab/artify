'use client'
import React, { Fragment, useEffect, useState } from 'react'
import Profile from './profile'
import Divider from '@/components/elements/Divider'
import General from './general'
import Project from './project'
import Settings from './settings'
import { useDispatch, useSelector } from 'react-redux'
import { preventScroll } from '@/lib/preventScroll'
import { CheveronDown, CheveronRight, Cross } from '@/utils/icons'
import { RootState } from '@/model/store'
import { setOpenMobileMenu } from '@/model/store/slices/navigationSlice'
import Typography from '@/components/elements/Typography'
import ListPages from './listPages'
import ListTask from './task'

const Sidebar = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState<number | null>(null)
  const openMobileMenu = useSelector((state: RootState) => state.navigation.openMobileMenu)
  useEffect(() => {
    if (openMobileMenu) {
      preventScroll()
    }
    // Cleanup function to restore scroll position when the modal is closed
    return () => {
      preventScroll(true)
    };
  }, [openMobileMenu]);
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
    }
  ]
  return (
    <>
      <div className={`${openMobileMenu ? 'flex w-[80%] z-30 fixed h-screen overflow-y-scroll pb-4 no-scrollbar' : 'hidden'} md:w-[20%] md:overflow-y-scroll no-scrollbar md:fixed md:h-[100%] md:flex flex-col justify-between px-3 py-2 bg-noble-black-800 rounded-[12px]`}>
        {openMobileMenu && (
          <div className='w-full h-screen fixed top-0 left-0 bg-bg-layer backdrop-blur-sm'>
            <p onClick={handleClose} className='absolute top-4 right-4 border-2 border-noble-black-500 p-1 rounded-[8px]'>
              <Cross />
            </p>
          </div>
        )}
        <div className='z-20 md:z-auto'>
          <Profile />
          {modules.map((module, i) => (
            <Fragment key={i}>
              <Divider />
              <div className='py-4'>
                  <div onClick={() => setActive(active===i?null:i)} className='my-3 cursor-pointer flex justify-between items-center'>
                    <Typography variant='semibold' className='text-[12px] text-noble-black-400'>{module.title}</Typography>
                    {active===i?(
                      <CheveronDown />
                      ):(
                      <CheveronRight />
                    )}
                  </div>
                  {active===i&&(
                    <module.Route />
                  )}
              </div>
            </Fragment>
          ))}
        </div>
        <Settings />
      </div>
    </>
  )
}

export default Sidebar
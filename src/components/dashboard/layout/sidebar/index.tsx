'use client'

import React, { useEffect } from 'react'
import Profile from './profile'
import Divider from '@/components/ui/Divider'
import General from './general'
import Project from './project'
import Settings from './settings'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { preventScroll } from '@/lib/preventScroll'
import { Cross } from '@/model/icons'
import { setOpenMobileMenu } from '@/store/slices/navigationSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const openMobileMenu = useSelector((state: RootState) => state.navigation.openMobileMenu)
  useEffect(() => {
    if(openMobileMenu) {
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
  return (
    <>
    <div className={`${openMobileMenu ? 'flex w-[80%] z-30 fixed h-screen overflow-y-scroll pb-4 no-scrollbar' : 'hidden'} md:w-[20%] md:fixed md:h-[96%] md:flex flex-col justify-between px-3 py-2 bg-dark-800 rounded-[12px]`}>
    <div className='w-full h-screen fixed top-0 left-0 bg-bg-layer backdrop-blur-sm'>
      <p onClick={handleClose} className='absolute top-4 right-4 border-2 border-gray-300 p-1 rounded-[8px]'>
       <Cross />
      </p>
    </div>
        <div className='z-20 md:z-auto'> 
            <Profile />
            <Divider />
            <General />
            <Divider />
            <Project />
        </div>
        <Settings />
    </div>
    </>
  )
}

export default Sidebar
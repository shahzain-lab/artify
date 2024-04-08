'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/model/store'
import { setOpenMobileMenu } from '@/model/store/slices/navigationSlice'
{
  /* Components */
}
import Typography from '@/components/elements/Typography'
import Share from './Share'
import UsersList from '../UsersList'
{
  /* Images */
}
import Image from 'next/image'
import edit from '@/assets/icons/edit.svg'
import menubar from '@/assets/icons/menubar.svg'

const Workspace = () => {
  const project = useSelector((state: RootState) => state.workspace.project)
  const dispatch = useDispatch()
  return (
    <div className='flex flex-col md:flex-row justify-between items-start md:gap-0 gap-2 md:items-center p-2 md:p-6'>
      <div className='flex w-full justify-between items-center'>
        <div className='flex flex-col gap-2'>
          <Typography variant='bold' className='text-md md:text-xl'>
            {project.title}
          </Typography>
          <Typography variant='medium' className='text-gray-light-100 text-[12px] md:text-sm'>
            {project.desc}
          </Typography>
        </div>
        <Image
          src={menubar}
          alt='share'
          width={35}
          height={35}
          className='md:hidden dark:hover:bg-noble-black-600  p-2 rounded-[8px]'
          onClick={() => dispatch(setOpenMobileMenu(true))}
        />
      </div>
      <div className='pl-3 md:pl-auto flex items-center justify-between gap-2 md:py-0 md:px-0 w-full'>
        <UsersList depth={4} users={project.members} />
        <div className='flex items-center gap-2'>
          <Share />
          <Image src={edit} alt='share' width={35} height={35} className='hover:bg-noble-black-600 p-2 rounded-[8px]' />
        </div>
      </div>
    </div>
  )
}

export default Workspace

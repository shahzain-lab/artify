'use client'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/model/store'
{
  /* Components */
}
import Typography from '@/components/elements/Typography'
import Share from './Share'
import UsersList from '../UsersList'
import { Button } from '@/components/elements/Button'
import { Edit } from '@/utils/icons'

const Workspace = () => {
  const project = useSelector((state: RootState) => state.workspace.project)
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
      </div>
      <div className='pl-3 md:pl-auto flex items-center justify-between md:justify-end gap-2 md:py-0 md:px-0 w-full'>
        <UsersList depth={4} users={project.members} />
        <div className='flex items-center gap-2'>
          <Share />
          <Button
            variant='grayoutline'
            className='border-transparent'
            >
            <Edit className='dark:text-gray-200 text-gray-800' />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Workspace

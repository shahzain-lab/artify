'use client'
import SearchBar from '@/components/app/SearchBar'
import { Button } from '@/components/elements/Button'
import Dropdown from '@/components/elements/Dropdown'
import SimpleCard from '@/components/elements/SimpleCard'
import Typography from '@/components/elements/Typography'
import { RootState } from '@/model/store'
import UsersList from '@/modules/project/header/UsersList'
import Kanban from '@/modules/task/Kanban'
import { Plus } from '@/utils/icons'
import React from 'react'
import { useSelector } from 'react-redux'

const KanbanPage = () => {
  const project = useSelector((state: RootState) => state.workspace.project)
  return (
    <div className='py-10 md:pr-6'>
        <Typography className='text-2xl font-semibold'>Kanban Board</Typography>
        <SimpleCard align='item-between' alignSM='item-col-between' className='md:my-4 md:py-6 gap-3 my-3'>
          <div className='flex gap-2 items-center justify-between md:justify-normal w-full md:w-auto'>
              <Button
                size={'sm'}
                Icon={<Plus color='#000' />}
              >
                New Board
              </Button>
              <Dropdown size='lg' />
          </div>
          <div className='hidden md:block'>
           <UsersList users={project.members} depth={4} />
          </div>
          <SearchBar />
        </SimpleCard>
        <Kanban />
    </div>
  )
}

export default KanbanPage
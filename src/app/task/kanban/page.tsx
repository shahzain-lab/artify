'use client'
import React from 'react'
import SearchBar from '@/components/app/SearchBar'
import { RootState } from '@/model/store'
import { useSelector } from 'react-redux'
{
  /* Components */
}
import { Button } from '@/components/elements/Button'
import Dropdown from '@/components/elements/Dropdown'
import SimpleCard from '@/components/elements/SimpleCard'
import Typography from '@/components/elements/Typography'
import UsersList from '@/modules/project/header/UsersList'
import Kanban from '@/modules/task/Kanban'
import { Plus } from '@/utils/icons'

const KanbanPage = () => {
  const project = useSelector((state: RootState) => state.workspace.project)
  return (
    <div className='py-10 md:pr-6'>
      <Typography className='text-2xl font-semibold'>Kanban Board</Typography>
      <SimpleCard align='item-between' alignSM='item-col-between' className='md:my-4 md:py-6 gap-3 my-3'>
        <div className='flex gap-2 items-center justify-between md:justify-normal w-full md:w-auto'>
          <Button size={'sm'} Icon={<Plus color='#000' />}>
            New Board
          </Button>
          <Dropdown title='Dropdown' options={['Newest', 'Oldest', 'A-Z', 'Z-A']} Icon color='ghost' />
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

import React from 'react'
import Typography from '@/components/elements/Typography'
import Link from 'next/link'
{
  /* Utils */
}
import { Backlog, Task } from '@/utils/icons'

interface ITask {
  title: string
  path: string
  icon: JSX.Element
}

const ListTask = () => {
  const tasks: ITask[] = [
    { title: 'Kanban', path: '/task/kanban', icon: <Backlog className='w-5 h-5 dark:text-[#fff] text-noble-black-700' /> },
    { title: 'Task Detail', path: '/task/details', icon: <Task className='w-5 h-5 dark:text-[#fff] text-noble-black-700' /> }
  ]
  return (
    <div className='flex flex-col gap-1'>
      {tasks.map((task, i) => (
        <Link key={i} href={task.path}>
          <div key={i} className={`hover:bg-glass-fill rounded-[8px] my-1 px-1 py-4 flex justify-between items-center`}>
            <div className=' flex items-center gap-2'>
              {task.icon ? <>{task.icon}</> : null}
              <Typography variant='semibold' className='text-sm text-noble-black-400'>
                {task.title}
              </Typography>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ListTask

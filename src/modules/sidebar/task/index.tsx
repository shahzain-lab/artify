import Typography from '@/components/elements/Typography'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/icons/artificium.svg'
import { Backlog, Task } from '@/utils/icons'

interface ITask {
  title: string;
  path: string;
  icon:  JSX.Element;
}

const ListTask = () => {

  const tasks: ITask[] = [
    { title: 'Kanban', path: '/task/kanban', icon: <Backlog className='w-[18px] h-[18px]' color='#fff' /> },
    { title: 'Task Detail', path: '/task/details', icon: <Task className='w-[18px] h-[18px]' color='#fff' /> }
  ]
  return (
    <div className="flex flex-col gap-1">
      {tasks.map((task, i) => (
        <Link key={i} href={task.path}>
          <div key={i} className={`hover:bg-glass-fill rounded-[8px] my-1 px-1 py-4 flex justify-between items-center`}>
            <div className=' flex items-center gap-2'>
              {task.icon ? (
                <>{task.icon}</>
              ): null}
              <Typography variant='semibold' className='text-sm text-noble-black-100'>{task.title}</Typography>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ListTask
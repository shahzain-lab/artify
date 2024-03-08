import Typography from '@/components/elements/Typography'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/assets/icons/artificium.svg'

const ListTask = () => {
  const tasks = [
    { title: 'Kanban', path: '/task/kanban', icon:  logo},
    { title: 'Task Detail', path: '/task/details', icon:  logo}
  ]
  return (
    <div className="flex flex-col gap-1">
      {tasks.map((task, i) => (
        <Link key={i} href={task.path}>
          <div key={i} className={`hover:bg-glass-fill rounded-[8px] my-1 px-1 py-4 flex justify-between items-center`}>
            <div className=' flex items-center gap-2'>
              {task.icon ? (
                <Image
                  src={task.icon}
                  alt={task.title || ''}
                  width={20}
                  height={20}
                  className=''
                />
              ) : null}
              <Typography variant='semibold' className='text-sm text-noble-black-100'>{task.title}</Typography>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default ListTask
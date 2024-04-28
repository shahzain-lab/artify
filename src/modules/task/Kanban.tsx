import React, { useState } from 'react'
import { ITaskCardProps } from '@/interfaces/IElements.interface'
import { RootState } from '@/model/store'
import { useSelector } from 'react-redux'
{
  /* Components */
}
import TaskPanel from '@/components/app/TaskPanel'
import TaskCard from '@/components/elements/TaskCard'
{
  /* Images */
}
import image1 from '@/assets/card.png'
import image2 from '@/assets/card2.png'

const Kanban = () => {
  const project = useSelector((state: RootState) => state.workspace.project)
  const date = new Date()
  const [tasks] = useState<ITaskCardProps[]>([
    {
      id: '#SPK-11',
      title: 'New dashboard design.',
      content: 'Lorem ipsum dolor sit amet consectetur. Mattis mi vulputate in pharetra in bibendum.',
      created: new Date(date.getTime() - 3 * 60 * 60 * 1000),
      tags: ['Admin'],
      images: [],
      comments: [],
      likes: 3,
      users: project.members
    },
    {
      id: '#SPK-11',
      title: 'New dashboard design.',
      content: 'Lorem ipsum dolor sit amet consectetur. Mattis mi vulputate in pharetra in bibendum.',
      created: new Date(date.getTime() - 3 * 60 * 60 * 1000),
      tags: ['Admin'],
      images: [image1, image2],
      comments: [],
      likes: 3,
      users: project.members
    },
    {
      id: '#SPK-11',
      title: 'New dashboard design.',
      content: 'Lorem ipsum dolor sit amet consectetur. Mattis mi vulputate in pharetra in bibendum.',
      created: new Date(date.getTime() - 3 * 60 * 60 * 1000),
      tags: ['Admin'],
      images: [],
      comments: [],
      likes: 3,
      users: project.members
    }
  ])

  return (
    <div className='flex gap-2 pr-10 overflow-x-scroll items-start justify-start no-scrollbar'>
      <TaskPanel title='Todo' className='w-[340px]'>
        {tasks.map((task, i) => (
          <TaskCard key={i} {...task} />
        ))}
      </TaskPanel>
      <TaskPanel title='Todo' className='w-[340px]'>
        {tasks.map((task, i) => (
          <TaskCard key={i} {...task} />
        ))}
      </TaskPanel>
      <TaskPanel title='Done' className='w-[340px]'>
        {tasks.map((task, i) => (
          <TaskCard key={i} {...task} />
        ))}
      </TaskPanel>
      <TaskPanel title='Testing' className='w-[340px]'>
        {tasks.map((task, i) => (
          <TaskCard key={i} {...task} />
        ))}
      </TaskPanel>
      <TaskPanel title='Completed' className='w-[340px]'>
        {tasks.map((task, i) => (
          <TaskCard key={i} {...task} />
        ))}
      </TaskPanel>
    </div>
  )
}

export default Kanban

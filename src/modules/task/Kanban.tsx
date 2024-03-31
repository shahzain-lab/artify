import React, { useState } from 'react'
import { ITaskCardProps } from '@/interfaces/IElements.interface'
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'
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
  const [tasks, setTasks] = useState<ITaskCardProps[]>([
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

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return

    const items = Array.from(tasks)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)
    setTasks(items)
  }

  return (
    <div className='flex gap-2 pr-10 overflow-x-scroll items-start justify-start no-scrollbar'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='tasks'>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <TaskPanel title='new - 2' className='w-[340px]'>
                {tasks.map((task, i) => (
                  <Draggable key={i} draggableId={i.toString()} index={i}>
                    {(provided) => (
                      <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <TaskCard {...task} />
                      </div>
                    )}
                  </Draggable>
                ))}
              </TaskPanel>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
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

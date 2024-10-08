import React from 'react'
import { Button } from '../elements/Button'
{
  /* Utils */
}
import { Plus } from '@/utils/icons'
import { cn } from '@/lib/utils'

interface Props {
  title?: string
  children?: React.ReactNode
  className?: string
}

const TaskPanel = ({ title, children, className }: Props) => {
  return (
    <div className={cn('dark:bg-noble-black-800 bg-gray-200 rounded-2xl p-3  flex-shrink-0', className)}>
      <div className='flex justify-between items-center'>
        <span>{title}</span>
        <Button Icon={<Plus className='w-4 h-4' />} color='gray' className='text-[12px] gap-1 p-2 bg-gray-200' size={'sm'}>
          Add new
        </Button>
      </div>
      <div className='flex flex-col gap-4 mt-4 overflow-y-scroll no-scrollbar h-[80vh]'>{children}</div>
    </div>
  )
}

export default TaskPanel

import Kanban from '@/app/task/kanban/page'
import { ITaskCardProps } from '@/interfaces/IElements.interface'
import { formatDate } from '@/lib/formatDate'
import { formatTimeDifference } from '@/lib/formatTimeDifference'
import { CommentDashed, Like, Watch } from '@/utils/icons'
import React from 'react'
import Typography from './Typography'
import Image from 'next/image'
import UsersList from '@/modules/project/header/UsersList'
import Chip from './Chip'

const TaskCard: React.FC<ITaskCardProps> = ({
  id,
  images,
  content,
  title,
  classNames,
  tags,
  created,
  children,
  variant = 'primary',
  comments,
  likes,
  users
}) => {
  return (
    <div className='bg-noble-black-900 p-3 rounded-xl'>
      <div className='flex justify-between items-center text-[12px] my-2 text-noble-black-200'>
        <p className='flex items-center gap-2'><Watch /> <span>Created - {created && formatDate(created)}</span></p>
        <span>{formatTimeDifference(created)}</span>
      </div>
      {tags?.length && (
      <div className='flex items-center my-3 gap-2 text-[12px]'>
        <Chip variant='gray' content={id} />
        {tags.map((tag) => (
          <Chip variant='green' key={tag} content={tag} />
        ))}
      </div>
      )}
      <div className='mb-3 flex flex-col gap-2'>
          {title && (
            <Typography className='block text-sm font-bold'>{title}</Typography>
          )}
          {content && (
            <Typography className='block text-sm text-noble-black-300'>{content}</Typography>
          )}
          {images?.length ? (
            <div className='flex gap-1'>
              {images.map((img, i) => (
                <Image 
                  key={i}
                  src={img}
                  alt={typeof title === 'string' ? title : ''}
                  width={100}
                  height={100}
                  className='w-10 h-10 rounded-md border border-gray-700'
                />
              ))}
            </div>
          ):null}
          {children}
      </div>
      <div className='border-t border-dashed border-gray-700 flex items-center justify-between pt-3 pb-1'>
        <div className='flex gap-4 items-center'>
          <div className='flex items-center gap-1'>
            <Like className='w-4 h-4' />
            <span className='text-base'>{likes}</span>
          </div>
          <div className='flex items-center gap-1'>
            <CommentDashed className='w-4 h-4' />
            <span className='text-base'>{comments?.length}</span>
          </div>
        </div>
        {users?.length ? (
          <UsersList users={users} depth={3} />
        ):null}
      </div>
    </div>
  )
}

export default TaskCard
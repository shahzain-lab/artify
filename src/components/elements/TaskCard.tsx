import React from 'react'
import { ITaskCardProps } from '@/interfaces/IElements.interface'
{
  /* Components */
}
import Image from 'next/image'
import Typography from './Typography'
import UsersList from '@/modules/project/header/UsersList'
import Chip from './Chip'
import Dropdown from './Dropdown'
{
  /* Utils */
}
import { formatTimeDifference } from '@/lib/formatTimeDifference'
import { CommentDashed, Like, TripleDot, Watch } from '@/utils/icons'
import { formatDate } from '@/lib/formatDate'

const TaskCard: React.FC<ITaskCardProps> = ({
  id,
  images,
  content,
  title,
  tags,
  created,
  children,
  comments,
  likes,
  users
}) => {
  return (
    <div className='dark:bg-noble-black-900 bg-white p-3 rounded-xl'>
      <div className='flex justify-between items-center text-[12px] my-2 text-noble-black-200'>
        <p className='flex items-center gap-2'>
          <Watch /> <span>Created - {created && formatDate(created)}</span>
        </p>
        {created ? <span>{formatTimeDifference(created)}</span> : null}
      </div>
      <div className='flex items-center justify-between'>
        {tags?.length ? (
          <div className='flex items-center my-3 gap-2 text-[12px]'>
            <Chip color='destructive' content={id} />
            {tags.map((tag) => (
              <Chip color='green' key={tag} content={tag} />
            ))}
          </div>
        ) : null}
        <Dropdown
          color='gray'
          classNames={{
            button: 'px-2',
            items: 'absolute -left-10 bg-gray-900 rounded-xl',
            item: 'rounded-xl text-white hover:text-gray-800'
          }}
          options={['view', 'Edit', 'Delete']}
          Icon={<TripleDot className='w-3 h-3' />}
        />
      </div>
      <div className='mb-3 flex flex-col gap-2'>
        {title && <Typography className='block text-sm font-bold'>{title}</Typography>}
        {content && <Typography className='block text-[12px] text-noble-black-300'>{content}</Typography>}
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
        ) : null}
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
        {users?.length ? <UsersList users={users} depth={3} /> : null}
      </div>
    </div>
  )
}

export default TaskCard

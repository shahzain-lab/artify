import React from 'react'
import Image from 'next/image'
import { Status } from '@/utils/icons'
import { IUser } from '@/interfaces/app.interface'

interface Props {
  users: IUser[]
  depth?: number
}

const UsersList = ({ users, depth = 0 }: Props) => {
  return (
    <div className='flex items-center'>
      {users.slice(0, depth).map((user, i: number) => (
        <div key={i} className='no-overlay -ml-3 relative'>
          <Image
            src={user.avatar}
            alt=''
            width={40}
            height={40}
            className='w-[30px] h-[30px] md:w-[40px] md:h-[40px]'
          />
          {user.status === 'ON' ? (
            <span className='absolute -top-2 -right-1 z-20'>
              <Status />
            </span>
          ) : null}
        </div>
      ))}
      <div className='text-gray-light-100 dark:bg-noble-black-700 bg-gray-200 mt-1 md:mt-auto w-7 h-7 md:w-9 md:h-9 text-sm -ml-3 rounded-[12px] flex justify-center items-center'>
        +{users.length - depth}
      </div>
    </div>
  )
}

export default UsersList

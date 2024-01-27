import React from 'react'
import { IUser } from '../main/IUser.interface'
import Image from 'next/image'
import { Status } from '@/lib/icons'

interface Props {
    users: IUser[];
    depth?: number;
}

const UsersList = ({users, depth = 0}: Props) => {
  return (
    <div className='flex items-center'>
    {users.slice(0, depth).map((user, i: number) => (
        <div key={i} className='-ml-3 z-10 relative'>
            <Image
                src={user.profilePic}
                alt=''
                width={40}
                height={40}
            />
            {user.status === 'ON' ? (
                <span className='absolute -top-2 -right-1 z-20'>
                    <Status />
                </span>
            ) : null}
        </div>
    ))}
    <div className='text-gray bg-dark w-9 h-9 text-sm -ml-2 rounded-[12px] flex justify-center items-center'>
        +{users.length - depth}
    </div>
</div>
  )
}

export default UsersList
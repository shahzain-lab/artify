import { users } from '@/lib/userDB'
import Typography from '@/components/elements/Typography'
import Image from 'next/image'
import React from 'react'
import { IUser } from '@/interfaces/IUser.interface'

interface Props {
    text: string
    handleSelectedUsers: (user: IUser) => void
}

const InviteeList = ({ text, handleSelectedUsers }: Props) => {
    return (
        <div className='absolute top-[110%] w-full left-0 rounded-2xl bg-dark-800 p-3'>
            <Typography size='xs' className='text-gray' variant='medium'>Users</Typography>
            <div className='flex flex-col'>
                {users.filter(user => user.fullName.toLowerCase().startsWith(text.toLowerCase())).map((user) => (
                    <div
                        key={user.username}
                        onClick={() => handleSelectedUsers(user)}
                        className='flex items-start gap-2 py-2 px-3 rounded-2xl hover:shadow-xl-inset hover:bg-glass-fill border border-dark-800 hover:border-glass-stroke'>
                        <Image
                            src={user.profilePic}
                            alt={user.fullName}
                            width={50}
                            height={50}
                        />
                        <div className='flex flex-col -mt-1'>
                            <Typography className='' size='ms' variant='semibold'>{user.fullName}</Typography>
                            <Typography className='text-[12px] -mt-1 text-theme-primary' variant='medium'>{user.username}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InviteeList
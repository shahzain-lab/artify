'use client'
import Typography from '@/components/elements/Typography'
import Image from 'next/image'
import React, { useState } from 'react'
import InviteeList from './InviteeList'
import { Button } from '@/components/elements/Button'
import { users } from '@/lib/userDB'
import { IUser } from '@/interfaces/IUser.interface'

const InviteForm = () => {
    const [text, setText] = useState('')
    const [selectedUsers, setSelectedUsers] = useState<IUser[]>([])

    const handleSelectedUsers = (user: IUser) => {
        setSelectedUsers([...selectedUsers, user])
        setText('')
    }
    return (
        <div className='mt-5 flex items-center gap-2'>
            <div className='relative border border-gray-300 p-2 rounded-lg w-full flex items-center'>
                <div className='flex items-center gap-2'>
                    {selectedUsers.map((user: IUser) => (
                        <div key={user.username} className='bg-glass-fill p-1 border h-[32px] rounded-xl border-glass-stroke flex items-center gap-2'>
                            <Image
                                src={users[0].profilePic}
                                alt=''
                                width={24}
                                height={24}
                            />
                            <Typography className='text-[12px] text-gray' variant='semibold'>{user.fullName}</Typography>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 8 8" fill="none">
                                <path d="M1.6665 1.66666L6.33317 6.33332M6.33317 1.66666L1.6665 6.33332" stroke="#686B6E" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </div>
                    ))}
                </div>
                <input
                    value={text}
                    placeholder='Name'
                    onChange={(e) => setText(e.target.value)}
                    className='bg-inherit text-white outline-none pl-2 border-none'
                />
                {text?.length ? (
                    <InviteeList
                        text={text}
                        handleSelectedUsers={handleSelectedUsers}
                    />
                ) : null}
            </div>
            <Button className='flex gap-2 items-center'>
                Invite
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9.73084 14.2692L19.2337 4.76642M5.48664 7.99807L17.1349 4.11532C18.8344 3.54883 20.4512 5.16564 19.8847 6.8651L16.0019 18.5134C15.3895 20.3507 12.8613 20.5304 11.9952 18.7981L10.0548 14.9174C9.84447 14.4967 9.50334 14.1555 9.08263 13.9452L5.20188 12.0048C3.46962 11.1387 3.64929 8.61052 5.48664 7.99807Z" stroke="#0C1132" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Button>
        </div>
    )
}

export default InviteForm
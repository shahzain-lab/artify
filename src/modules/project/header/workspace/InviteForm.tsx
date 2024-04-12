'use client'
import React, { useState } from 'react'
import Image from 'next/image'
{
  /* Components */
}
import Typography from '@/components/elements/Typography'
import Input from '@/components/elements/Input'
import InviteeList from './InviteeList'
import { Button } from '@/components/elements/Button'
{
  /* Utils */
}
import { users } from '@/lib/userDB'
import { IUser } from '@/interfaces/IUser.interface'
import { PaperPlane } from '@/utils/icons'

const InviteForm = () => {
  const [text, setText] = useState('')
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([])

  const handleSelectedUsers = (user: IUser) => {
    setSelectedUsers([...selectedUsers, user])
    setText('')
  }
  return (
    <div className='mt-5 flex flex-col md:flex-row items-center gap-2'>
      <div className='relative border border-noble-black-500 p-2 rounded-lg w-full flex items-center'>
        <div className='flex items-center gap-2'>
          {selectedUsers.map((user: IUser) => (
            <div
              key={user.username}
              className='bg-glass-fill p-1 border h-[32px] rounded-xl border-glass-stroke flex items-center gap-2'
            >
              <Image src={users[0].profilePic} alt='' width={24} height={24} />
              <Typography className='text-[12px] text-gray-light-100' variant='semibold'>
                {user.fullName}
              </Typography>
              <svg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 8 8' fill='none'>
                <path
                  d='M1.6665 1.66666L6.33317 6.33332M6.33317 1.66666L1.6665 6.33332'
                  stroke='#686B6E'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />
              </svg>
            </div>
          ))}
        </div>
        <Input
          value={text}
          placeholder='Name'
          onChange={(e) => setText(e.target.value)}
          className='bg-inherit text-white outline-none pl-2 py-1 border-none'
        />
        {text?.length ? <InviteeList text={text} handleSelectedUsers={handleSelectedUsers} /> : null}
      </div>
      <Button className='flex gap-2 items-center w-full md:w-auto'>
        Invite
        <PaperPlane className='text-[#0C1132]' />
      </Button>
    </div>
  )
}

export default InviteForm

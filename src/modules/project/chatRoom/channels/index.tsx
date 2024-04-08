import React, { useState } from 'react'
import Participant from './participants'
import ToggleMembers from './participants/ToggleMembers'
import Groups from './groups'
import { IUser } from '@/interfaces/IUser.interface'
{
  /* Utils */
}
import { users } from '@/lib/userDB'
import { Globe, Lock } from '@/utils/icons'

interface Props {
  isOpen: boolean
}

export interface IChannel {
  name: string
  Icon: ({ color }: { color?: string }) => JSX.Element
  members: IUser[]
}

export const channelGroups = [
  {
    name: 'Information',
    channels: []
  },
  {
    name: 'Public Channels',
    channels: [
      {
        name: 'Top Secret',
        Icon: Lock,
        members: users.slice(0, 3)
      },
      {
        name: 'Feedback',
        Icon: Globe,
        members: users.slice(1, 5)
      },
      {
        name: 'Spaceship Crew',
        Icon: Globe,
        members: users.slice(0, -1)
      },
      {
        name: 'User interface',
        Icon: Globe,
        members: users.slice(0, -1)
      }
    ]
  },
  {
    name: 'User interface',
    channels: []
  }
]

const Channels = ({ isOpen }: Props) => {
  const [toggleBar, setToggleBar] = useState(1)

  return (
    <div
      className={`  
        ${isOpen ? 'block w-[80%] fixed h-full top-0 p-3 z-30 dark:bg-noble-black-600 bg-white right-0' : 'hidden'} 
        md:block md:relative md:w-1/3`}
    >
      <div className='h-screen pb-20 overflow-y-scroll no-scrollbar md:sticky top-0'>
        {toggleBar === 0 ? <Participant /> : <Groups channelGroups={channelGroups} />}
        <ToggleMembers toggleBar={toggleBar} setToggleBar={setToggleBar} />
      </div>
    </div>
  )
}

export default Channels

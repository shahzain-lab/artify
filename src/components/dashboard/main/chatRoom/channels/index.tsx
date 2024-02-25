import React, { useState } from 'react'
import Participant from './participants'
import ToggleMembers from './participants/ToggleMembers'
import { users } from '@/components/dashboard/lib/userDB'
import Groups from './groups'
import { Globe, Lock } from '@/components/dashboard/shared/icons'

interface Props {
    isOpen: boolean
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
            },
        ]
    },
    {
        name: 'User interface',
        channels: []
    },
]

const Channels = ({ isOpen }: Props) => {
    const [toggleBar, setToggleBar] = useState(1)

    return (
        <div className={`  
        ${isOpen ? 'block w-[80%] fixed h-full top-0 p-3 z-30 bg-light-dark right-0' : 'hidden'} 
        md:block md:relative md:w-1/3`}>
            <div className='h-screen pb-20 overflow-y-scroll md:sticky top-0'>
                {toggleBar === 0 ?
                    <Participant /> : <Groups channelGroups={channelGroups} />
                }
                <ToggleMembers
                    toggleBar={toggleBar}
                    setToggleBar={setToggleBar}
                />
            </div>
        </div>
    )
}

export default Channels
import React, { useState } from 'react'
import Participant from './participants'
import ToggleMembers from './participants/ToggleMembers'
import { users } from '@/components/dashboard/lib/userDB'
import Groups from './groups'
import { Globe, Lock } from '@/lib/icons'

const Channels = () => {
    const [toggleBar, setToggleBar] = useState(0)

    const channelGroups = [
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
    return (
        <div className='w-1/3 relative'>
            <div className='sticky top-0'>
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
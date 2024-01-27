import React, { useState } from 'react'
import { IUser } from '../../../IUser.interface'
import { CheveronDown, CheveronRight, Status, TriLine } from '@/lib/icons'
import Image from 'next/image'
import Typography from '@/components/ui/Typography'

interface IChannel {
    name: string,
    Icon: ({ color }: { color?: string }) => JSX.Element,
    members: IUser[]
}

interface IChannelGroups {
    name: string,
    channels: IChannel[]
}

interface Props {
    channelGroups: IChannelGroups[]
}

const Groups = ({ channelGroups }: Props) => {
    const [openGroup, setOpenGroup] = useState<{
        group: null | number,
        channel: null | number
    }>({
        group: null,
        channel: null
    })

    return (
        <div>
            {channelGroups.map((group, i) => (
                <div key={i} className='py-5 border-b border-light-dark text-sm font-semibold'>
                    <div
                        onClick={() => setOpenGroup({ ...openGroup, group: openGroup.group === i ? null : i })}
                        className='flex gap-2 cursor-pointer items-center'>
                        {openGroup.group === i ? (
                            <CheveronDown color='#CDCECF' />
                        ) : (
                            <CheveronRight color='#686B6E' />
                        )}
                        <span className={`${openGroup.group === i ? 'text-silver' : 'text-gray'} `}>{group.name}</span>
                    </div>
                    {openGroup.group === i ? (
                        <div className={`flex flex-col gap-3 mt-3`}>
                            {group.channels.map((channel, i) => (
                                <div
                                    onClick={() => setOpenGroup({ ...openGroup, channel: openGroup.channel === i ? null : i })}
                                    key={i}
                                    className={`${openGroup.channel === i ? 'border-[2px] rounded-xl border-light-dark' : ''} p-3 cursor-pointer`}>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex items-center gap-2'>
                                            <channel.Icon color='#686B6E' />
                                            <span className={`${openGroup.channel === i ? 'text-white' : 'text-gray'} `}>{channel.name}</span>
                                        </div>
                                        {openGroup.channel === i && (
                                            <div className='bg-glass-fill border-t border-glass-stroke px-4 py-2 text-theme-primary text-[12px] font-semibold rounded-2xl'>
                                                {channel.members.length}
                                            </div>
                                        )}
                                    </div>
                                    {openGroup.channel === i && (
                                        <div className='mt-3'>
                                            {channel.members.map((user, i) => (
                                                <div key={i} className='flex items-center'>
                                                    <div className={`border-l-2 border-gray-300 ml-2 relative h-[69px] w-8`}>
                                                        <TriLine className='absolute -left-[13px] top-[37%]' />
                                                    </div>
                                                    <div
                                                        key={user.username}
                                                        className={`flex w-full items-center gap-2 py-2 px-3 rounded-2xl hover:shadow-xl-inset 
                                                        hover:bg-glass-fill border border-transparent hover:border-glass-stroke}`}>
                                                        <div className=' z-10 relative'>
                                                            <Image
                                                                src={user.profilePic}
                                                                alt=''
                                                                width={48}
                                                                height={48}
                                                            />
                                                            {user.status === 'ON' ? (
                                                                <span className='absolute -top-2 -right-1 z-20'>
                                                                    <Status />
                                                                </span>
                                                            ) : null}
                                                        </div>
                                                        <div className='flex flex-col -mt-1'>
                                                            <Typography className='text-gray' size='ms' variant='semibold'>{user.fullName}</Typography>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    )
}

export default Groups
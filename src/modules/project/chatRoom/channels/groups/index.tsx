import Image from 'next/image'
import React, { useState } from 'react'
import { IUser } from '../../../../../interfaces/IUser.interface'
import Typography from '@/components/elements/Typography'
{
  /* Utils */
}
import { CheveronDown, CheveronRight, Status, TriLine } from '@/utils/icons'
import { cn } from '@/lib/utils'

interface IChannel {
  name: string
  Icon: ({ className }: { className?: string }) => JSX.Element
  members: IUser[]
}

interface IChannelGroups {
  name: string
  channels: IChannel[]
}

interface Props {
  channelGroups: IChannelGroups[]
}

const Groups = ({ channelGroups }: Props) => {
  const [openGroup, setOpenGroup] = useState<{
    group: null | number
    channel: null | number
  }>({
    group: 1,
    channel: 2
  })

  return (
    <div>
      {channelGroups.map((group, i) => (
        <div key={i} className={cn(
          'py-5 text-sm font-semibold',
          (channelGroups.length - 1) === i ? '' : 'border-b dark:border-noble-black-600 border-noble-black-200'
        )}>
          <div
            onClick={() => setOpenGroup({ ...openGroup, group: openGroup.group === i ? null : i })}
            className='flex gap-2 cursor-pointer items-center'
          >
            {openGroup.group === i ? (
              <CheveronDown className='text-[#CDCECF]' />
            ) : (
              <CheveronRight className='text-[#686B6E]' />
            )}
            <span className={`${openGroup.group === i ? 'dark:text-noble-black-200' : 'text-gray-light-100'} `}>
              {group.name}
            </span>
          </div>
          {openGroup.group === i ? (
            <div className={`flex flex-col gap-3 mt-3`}>
              {group.channels.map((channel, i) => (
                <div
                  onClick={() => setOpenGroup({ ...openGroup, channel: openGroup.channel === i ? null : i })}
                  key={i}
                  className={`${openGroup.channel === i ? 'border-[2px] rounded-xl dark:border-noble-black-600 border-noble-black-100' : ''} p-3 cursor-pointer`}
                >
                  <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-2'>
                      <channel.Icon className='dark:text-[#686B6E] text-gray-500' />
                      <span className={`${openGroup.channel === i ? 'dark:text-white text-gray-500' : 'text-gray-light-400'} `}>
                        {channel.name}
                      </span>
                    </div>
                    {openGroup.channel === i && (
                      <div className='bg-glass-fill border-t border-glass-stroke px-4 py-2 text-theme-greenish text-[12px] font-semibold rounded-2xl'>
                        {channel.members.length}
                      </div>
                    )}
                  </div>
                  {openGroup.channel === i && (
                    <div className='mt-3'>
                      {channel.members.map((user, i) => (
                        <div key={i} className='flex items-center'>
                          <div className={`border-l-2 dark:border-noble-black-500 border-gray-200 ml-2 relative h-[69px] w-8`}>
                            <TriLine className='absolute dark:text-noble-black-500 text-gray-200 -left-[13px] top-[37%]' />
                          </div>
                          <div
                            key={user.username}
                            className={`flex w-full items-center gap-2 py-2  px-3 rounded-2xl hover:shadow-xl-inset 
                                        hover:bg-glass-fill border border-transparent hover:border-glass-stroke}`}
                          >
                            <div className=' z-10 relative'>
                              <Image src={user.profilePic} alt='' width={48} height={48} />
                              {user.status === 'ON' ? (
                                <span className='absolute -top-2 -right-1 z-20'>
                                  <Status />
                                </span>
                              ) : null}
                            </div>
                            <div className='flex flex-col -mt-1'>
                              <Typography className='dark:text-gray-light-100 text-gray-600' size='ms' variant='semibold'>
                                {user.fullName}
                              </Typography>
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

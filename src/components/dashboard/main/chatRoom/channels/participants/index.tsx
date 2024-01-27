import { users } from '@/components/dashboard/lib/userDB'
import Typography from '@/components/ui/Typography'
import status from '@/assets/icons/Status.svg'
import Image from 'next/image'
import React from 'react'

const Participant = () => {
    return (
        <div>
            <Typography theme='gray' variant='semibold' size='xs'>Currently Online</Typography>
            <div className='flex flex-col gap-2'>
                {users.slice(0, 2).map((user) => (
                    <div
                        key={user.username}
                        className='flex items-start gap-2 py-2 px-3 rounded-2xl hover:shadow-xl-inset hover:bg-glass-fill border border-transparent hover:border-glass-stroke'>
                        <div className=' z-10 relative'>
                            <Image
                                src={user.profilePic}
                                alt=''
                                width={48}
                                height={48}
                            />
                            {user.status === 'ON' ? (
                                <span className='absolute -top-1 right-0 z-20'>
                                    <Image
                                        src={status}
                                        alt='status'
                                        width={20}
                                        height={20}
                                    />
                                </span>
                            ) : null}
                        </div>
                        <div className='flex flex-col -mt-1'>
                            <Typography className='' size='ms' variant='semibold'>{user.fullName}</Typography>
                            <Typography size='xs' theme='gray' className='text-[12px] -mt-1 ' variant='medium'>{user.activity}</Typography>
                        </div>
                    </div>
                ))}
            </div>
            <Typography theme='gray' variant='semibold' size='xs'>Offline</Typography>
            <div className='flex flex-col gap-2'>
                {users.slice(2, -1).map((user) => (
                    <div
                        key={user.username}
                        className='flex items-start gap-2 py-2 px-3 rounded-2xl hover:shadow-xl-inset hover:bg-glass-fill border border-transparent hover:border-glass-stroke'>
                        <div className=' z-10 relative'>
                            <Image
                                src={user.profilePic}
                                alt=''
                                width={48}
                                height={48}
                            />
                            {user.status === 'ON' ? (
                                <span className='absolute -top-1 left-3 z-20'>
                                    <Image
                                        src={status}
                                        alt='status'
                                        width={20}
                                        height={20}
                                    />
                                </span>
                            ) : null}
                        </div>
                        <div className='flex flex-col -mt-1'>
                            <Typography className='' size='ms' variant='semibold'>{user.fullName}</Typography>
                            <Typography size='xs' theme='gray' className='text-[12px] -mt-1 ' variant='medium'>{user.activity}</Typography>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Participant
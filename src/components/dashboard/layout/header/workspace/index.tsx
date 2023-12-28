import Typography from '@/components/ui/Typography'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
// Avatars
import status from '@/assets/icons/Status.svg'
import user1 from '@/assets/avatars/Avatar-1.png'
import user2 from '@/assets/avatars/Avatar-2.png'
import user3 from '@/assets/avatars/Avatar-3.png'
import user4 from '@/assets/avatars/Avatar-4.png'
import share from '@/assets/icons/share.svg'
import edit from '@/assets/icons/edit.svg'

const Workspace = () => {
    const avatars = [
        { avatar: user1, active: true },
        { avatar: user2, active: false },
        { avatar: user3, active: true },
        { avatar: user4, active: false },
    ]
    return (
        <div className='flex justify-between items-center p-6'>
            <div className='flex flex-col gap-2'>
                <Typography variant='bold' className='text-xl'>Orbital Oddysey</Typography>
                <Typography variant='medium' className='text-gray text-sm'>Marketing Campaign for a new TV series Launch</Typography>
            </div>
            <div className='flex items-center gap-2'>
                <div className='flex items-center'>
                    {avatars.map((user, i: number) => (
                        <div key={i} className='-ml-5 z-10 relative'>
                            <Image
                                src={user.avatar}
                                alt=''
                                width={40}
                                height={40}
                            />
                            {user.active?(
                                <span className='absolute -top-1 left-3 z-20'>
                                    <Image
                                        src={status}
                                        alt='status'
                                        width={20}
                                        height={20}
                                    />
                                </span>
                            ):null}
                        </div>
                    ))}
                    <div className='text-gray bg-dark w-9 h-9 -ml-2 rounded-[20px] flex justify-center items-center'>
                        +4
                    </div>
                </div>
                <Button
                    className='bg-transparent text-sm font-semibold text-gray-light flex gap-1'>
                    <Image
                        src={share}
                        alt='share'
                        width={20}
                        height={20}
                    />
                    Share
                </Button>
                <Button variant={'gray'}>
                    <Image
                        src={edit}
                        alt='share'
                        width={20}
                        height={20}
                    />
                </Button>
            </div>
        </div>
    )
}

export default Workspace
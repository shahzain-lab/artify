import React from 'react'
import Image from 'next/image'
import Typography from '@/components/ui/Typography'
import avatar from '@/assets/avatars/Avatar-8.png'
import chevron from '@/assets/icons/chevron.svg'

const Profile = () => {
    return (
        <div className='flex py-4 justify-between items-center'>
            <div className='flex items-center gap-3'>
                <Image
                    src={avatar}
                    alt='user'
                    width={48}
                    height={48}
                />
                <div className='flex flex-col'>
                    <Typography variant='semibold'>Intellisys</Typography>
                    <Typography variant="medium" className='text-[12px] text-theme-primary'>12 members</Typography>
                </div>
            </div>
            <Image
                src={chevron}
                alt='chevron'
                width={16}
                height={16}
            />
        </div>
    )
}

export default Profile
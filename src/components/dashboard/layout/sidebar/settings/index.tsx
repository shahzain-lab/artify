import React from 'react'
import Image from 'next/image'
import cog from '@/assets/icons/cog.svg'
import avatar from '@/assets/avatars/Avatar-7.png'
import Typography from '@/components/ui/Typography'

const Settings = () => {
    return (
        <div className='bg-glass-fill p-4 rounded-[16px] flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <Image
                    src={avatar}
                    alt='user'
                    width={48}
                    height={48}
                />
                <div className='flex flex-col'>
                    <Typography variant='semibold'>Ryan Lee</Typography>
                    <Typography variant="medium" className='text-[12px] text-theme-primary'>Premium</Typography>
                </div>
            </div>
            <Image
                src={cog}
                alt='cog'
                width={24}
                height={24}
            />
        </div>
    )
}

export default Settings
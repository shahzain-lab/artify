'use client'
import React from 'react'
import Image from 'next/image'
import Typography from '@/components/elements/Typography'
import chevron from '@/assets/icons/chevron.svg'
import { useSelector } from 'react-redux'
import { RootState } from '@/model/store'

const Profile = () => {
    const org = useSelector((state: RootState) => state.workspace.selectedOrg)
    return (
        <div className='flex py-4 justify-between items-center'>
            <div className='flex items-center gap-3'>
                <Image
                    src={org.logo}
                    alt='user'
                    width={48}
                    height={48}
                />
                <div className='flex flex-col'>
                    <Typography variant='semibold'>{org.name}</Typography>
                    <Typography variant="medium" className='text-[12px] text-theme-greenish'>{org.membersCount} members</Typography>
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
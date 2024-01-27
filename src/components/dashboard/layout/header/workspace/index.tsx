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
import edit from '@/assets/icons/edit.svg'
import Share from './Share'
import UsersList from '../../UsersList'
import { users } from '@/components/dashboard/lib/userDB'

const Workspace = () => {
    return (
        <div className='flex justify-between items-center p-6'>
            <div className='flex flex-col gap-2'>
                <Typography variant='bold' className='text-xl'>Orbital Oddysey</Typography>
                <Typography variant='medium' className='text-gray text-sm'>Marketing Campaign for a new TV series Launch</Typography>
            </div>
            <div className='flex items-center gap-2'>
               <UsersList depth={4} users={users} />
               <Share />
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
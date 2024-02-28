import { users } from '@/lib/userDB'
import { Button } from '@/components/elements/Button'
import Input from '@/components/elements/Input'
import Typography from '@/components/elements/Typography'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import InviteeList from './InviteeList'
import InviteForm from './InviteForm'

const ShareSpace = () => {
    return (
        <div className='flex flex-col gap-2'>
            <Typography
                className='text-lg'
                variant='semibold'
            >Manage who can view this project</Typography>
            <Typography
                size='sm'
                variant='medium'
                className='text-gray'
            >Select which users can access and view this project. Only users with access can view and edit the project.</Typography>
            <InviteForm />
            <div className={cn(
                'flex flex-col gap-4 mb-10 mt-5',
                //   users.length > 5 ? 'max-h-64 overflow-y-scroll' : ''
            )}>
                {users.slice(0, 4).map((user) => (
                    <div key={user.username} className='flex items-center justify-between'>
                        <div className='flex items-start gap-2'>
                            <Image
                                src={user.profilePic}
                                alt={user.fullName}
                                width={50}
                                height={50}
                            />
                            <div className='flex flex-col -mt-1'>
                                <Typography className='' size='ms' variant='semibold'>{user.fullName}</Typography>
                                <Typography className='text-[12px] -mt-1 text-theme-primary' variant='medium'>{user.username}</Typography>
                            </div>
                        </div>
                        <button className={cn(
                            'bg-glass-fill border-t border-glass-stroke rounded-xl shadow-xl-inset px-3 py-2 text-[12px]',
                            user.role === 0 ? 'text-theme-primary' : user.role === 1 ? 'text-blue-md' : 'text-purple-md'
                        )}>
                            {user.role === 0 ? 'Owner' : user.role === 1 ? 'Editor' : 'Viewer'}
                        </button>
                    </div>
                ))}
            </div>
            <div className='bg-dark rounded-xl flex justify-between items-center py-4 px-6'>
                <div className='flex gap-2 items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3" stroke="#B6F09C" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <Typography
                        className='text-sm'
                        variant='medium'
                    >Anyone with the link</Typography>
                </div>
                <div className='flex items-center gap-3'>
                    <span className='text-theme-primary text-sm'>can view</span>
                    <button className={cn(
                        'bg-glass-fill shadow-xl-inset px-3 py-2 rounded-xl text-[12px] font-semibold',
                        'flex items-center gap-1'
                    )}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M6 9.99998L10 5.99998M9.54475 11.4847L8.48409 12.5453V12.5453C7.31252 13.7169 5.41302 13.7169 4.24145 12.5453L3.63604 11.9399C2.46447 10.7683 2.46447 8.86885 3.63604 7.69727V7.69727L4.6967 6.63661M11.6661 9.36335L12.7267 8.30269V8.30269C13.8983 7.13111 13.8983 5.23162 12.7267 4.06005L12.1213 3.45463C10.9497 2.28306 9.05025 2.28306 7.87868 3.45463V3.45463L6.81802 4.51529" stroke="#9B9C9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Copy Link
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShareSpace
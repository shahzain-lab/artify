import Chip from '@/components/elements/Chip'
import Divider from '@/components/elements/Divider'
import Typography from '@/components/elements/Typography'
import React from 'react'

const SidePanel = () => {
    return (
        <div className='bg-noble-black-800 min-w-[300px] p-2 rounded-xl'>
            <Typography className='text-sm'>About</Typography>
            <Divider className='mt-2' />
            <ul className='text-sm flex flex-col gap-3 py-3'>
                <li className='flex justify-between w-full'><Typography className='text-noble-black-400 text-sm'>Full Name:</Typography> <Typography className='text-sm'>Shahzain</Typography></li>
                <li className='flex justify-between w-full'><Typography className='text-noble-black-400 text-sm'>Status:</Typography> <Typography className='text-sm'>Active</Typography></li>
                <li className='flex justify-between w-full'><Typography className='text-noble-black-400 text-sm'>Role:</Typography> <Typography className='text-sm'>Developer</Typography></li>
                <li className='flex justify-between w-full'><Typography className='text-noble-black-400 text-sm'>Country:</Typography> <Typography className='text-sm'>USA</Typography></li>
                <li className='flex justify-between w-full'><Typography className='text-noble-black-400 text-sm'>Language:</Typography> <Typography className='text-sm'>English</Typography></li>
            </ul>
            <Divider className='my-3' />
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between items-center w-full'>
                    <Typography className='text-sm'>Reviews</Typography>
                    <Chip content="20" color='blue' />
                </div>
                <div className='flex justify-between items-center w-full'>
                    <Typography className='text-sm'>Photos</Typography>
                    <Chip content="8" color='blue' />
                </div>
                <div className='flex justify-between items-center w-full'>
                    <Typography className='text-sm'>Followers</Typography>
                    <Chip content="12" color='blue' />
                </div>
                <div className='flex justify-between items-center w-full'>
                    <Typography className='text-sm'>Bookmarks</Typography>
                    <Chip content="16" color='blue' />
                </div>
            </div>
        </div>
    )
}

export default SidePanel
import Typography from '@/components/ui/Typography'
import React from 'react'
import Image from 'next/image'
import commentCirclePrimary from '@/assets/icons/comment-circle-primary.svg'
import arrowRightGray from '@/assets/icons/arrow-right-gray.svg'
import Features from './Features'
import Prompt from '../../prompt'

const Starter = () => {
    const assets = [
        'UI wireframe',
        'Brochure design',
        'Social media',
        'Brand guidelines',
    ]
    return (
        <main className='flex flex-col items-center justify-center gap-3 min-h-[70vh] pt-4 md:pt-0 no-scrollbar overflow-y-scroll'>
            <Typography variant='bold' size='md'>Innovation Starter Pack</Typography>
            <Typography variant='medium' size='ms' className='text-gray text-base text-center md:text-start'>
                Kickstart your innovation process with our comprehensive selection of predefined prompts.
            </Typography>

            <Features />
            
            <Prompt />
        </main>
    )
}

export default Starter
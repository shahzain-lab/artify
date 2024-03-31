import React from 'react'
import Typography from '@/components/elements/Typography'
{
  /* Images */
}
import Image from 'next/image'
import aboutImg from '@/assets/avatars/about.png'

const About = () => {
  return (
    <div className='w-full'>
      <div className='h-60 w-full flex justify-between items-start bg-[#c892fe47] rounded-xl shadow-md'>
        <Image src={aboutImg} alt='' width={400} height={400} className='w-[270px] h-[290px]' />
        <div className='flex items-center h-full mr-24 gap-7 p-4'>
          <div className='flex flex-col gap-2 items-center'>
            <Typography className='text-4xl font-bold'>88</Typography>
            <Typography className='text-sm text-noble-black-200'>Projects</Typography>
          </div>
          <div className='border-l border-gray-300 w-1 h-[60px]'></div>
          <div className='flex flex-col gap-2 items-center'>
            <Typography className='text-4xl font-bold'>52</Typography>
            <Typography className='text-sm text-noble-black-200'>Leads</Typography>
          </div>
          <div className='border-l border-gray-300 w-1 h-[60px]'></div>
          <div className='flex flex-col gap-2 items-center'>
            <Typography className='text-4xl font-bold'>1.8k</Typography>
            <Typography className='text-sm text-noble-black-200'>Followers</Typography>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

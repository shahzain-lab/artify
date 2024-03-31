import React from 'react'
import SimpleCard from '@/components/elements/SimpleCard'
import Typography from '@/components/elements/Typography'
import { Dribble, DollarSign, Level } from '@/utils/icons'
import SidePanel from '@/modules/profile/SidePanel'
import About from '@/modules/profile/About'
{
  /* Image */
}
import Image from 'next/image'
import user from '@/assets/avatars/user.webp'
import banner from '@/assets/backgrounds/banner.jpg'

const page = () => {
  return (
    <div>
      <SimpleCard className='h-60 flex justify-end flex-col'>
        <Image src={banner} alt='' width={200} height={200} className='w-full h-44 rounded-xl' />
        <div className='h-20 py-1 relative bg-noble-black-600 rounded-xl -mb-10'>
          <div className='bg-noble-black-600 absolute bottom-0 rounded-xl inline-block'>
            <Image src={user} alt='' width={200} height={200} className='w-32 h-32' />
          </div>
          <div className='pl-40 flex flex-col gap-2'>
            <Typography variant='semibold' className='text-xl text-white'>
              John Doe
            </Typography>
            <div className='flex gap-5'>
              <Typography className='text-[12px] text-noble-black-200 flex items-center gap-1'>
                <Dribble color='#ccc' className='w-3 h-3' /> UX Designer
              </Typography>
              <Typography className='text-[12px] text-noble-black-200 flex items-center gap-1'>
                <DollarSign color='#ccc' className='w-3 h-3' /> 15k
              </Typography>
              <Typography className='text-[12px] text-noble-black-200 flex items-center gap-2'>
                <Level color='#ccc' className='w-3 h-3' /> Level 2
              </Typography>
            </div>
          </div>
        </div>
      </SimpleCard>
      <div className='mt-16 flex gap-2'>
        <SidePanel />
        <About />
      </div>
    </div>
  )
}

export default page

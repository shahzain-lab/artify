import React from 'react'
import SimpleCard from '@/components/elements/SimpleCard'
import Typography from '@/components/elements/Typography'
import { Dribble, DollarSign } from '@/utils/icons'
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
    <div className='w-full md:w-[80%] md:p-2'>
      <SimpleCard className='h-60 flex justify-end flex-col'>
        <Image src={banner} alt='' width={200} height={200} className='w-full h-44 rounded-xl ' />
        <div className='h-20 py-1 dark:bg-noble-black-600 bg-white rounded-xl -mb-10'>
          <div className='dark:bg-noble-black-600 bg-white absolute top-[22%] no-overlay md:top-[30%] rounded-xl inline-block'>
            <Image src={user} alt='' width={200} height={200} className='w-32 h-32 ' />
          </div>
          <div className='pl-40 flex flex-col gap-2'>
            <Typography variant='semibold' className='text-xl text-white'>
              John Doe
            </Typography>
            <div className='flex gap-5'>
              <Typography className='text-[12px] dark:text-noble-black-200 text-black flex items-center gap-1'>
                <Dribble className='w-3 h-3 dark:text-[#ccc] text-black' /> UX Designer
              </Typography>
              <Typography className='text-[12px] dark:text-noble-black-200 text-black flex items-center gap-1'>
                <DollarSign className='w-3 h-3 dark:text-[#ccc] text-black' /> 15k
              </Typography>
              <Typography className='text-[12px] text-noble-black-200 flex items-center gap-2'></Typography>
            </div>
          </div>
        </div>
      </SimpleCard>
      <div className='mt-16 flex flex-col-reverse md:flex-row gap-2'>
        <SidePanel />
        <About />
      </div>
    </div>
  )
}

export default page

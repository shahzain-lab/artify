import React from 'react'
{
  /* Components */
}
import Typography from '@/components/elements/Typography'
import Link from 'next/link'
import { Button } from '@/components/elements/Button'
import Input from '@/components/elements/Input'
import Divider from '@/components/elements/Divider'
{
  /* Image */
}
import Image from 'next/image'
import imgSrc from '@/assets/backgrounds/bg-3.png'
import logo from '@/assets/Logo.svg'

const page = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-24 h-screen'>
      <div className='flex flex-col justify-between py-12 px-4 md:px-20'>
        <Image src={logo} alt='logo' width={32} height={32} />
        <div className='px-6 flex flex-col my-10 md:my-0'>
          <Typography size='xl' variant='regular'>
            Join or Create a Workspace
          </Typography>
          <Typography className='mb-10 text-base md:text-lg text-gray-light-100' variant='medium'>
            Connect with others by joining an existing workspace or create a new one to collaborate with your team.
          </Typography>

          <div className='flex flex-col md:flex-row gap-2 items-center'>
            <Input placeholder='.artificium.app' className='w-full md:w-[410px]' />
            <Button>Join Workspace</Button>
          </div>
          <div className='grid grid-cols-3 items-center my-5'>
            <Divider className='bg-noble-black-400' />
            <Typography
              className='text-[12px] tracking-[0.15px] text-noble-black-500 text-center'
              size='sm'
              variant='medium'
            >
              or
            </Typography>
            <Divider className='bg-noble-black-400' />
          </div>
          <Button color={'gray'}>Create new Workspace</Button>
        </div>
        <div className='hidden md:flex items-center justify-between'>
          <Typography variant='medium' className='dark:text-gray-light-100 text-gray-light-200 text-sm'>
            Artificium.app © 2024
          </Typography>
          <Link href={'#'}>
            <Typography variant='medium' className='dark:text-gray-light-100 text-gray-light-200 text-sm'>
              Privacy Policy
            </Typography>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <div className='w-full flex justify-end'>
        <Image src={imgSrc} alt='background' width={50} height={330} unoptimized className='w-full md:w-[80%] h-screen' />
      </div>
    </div>
  )
}

export default page

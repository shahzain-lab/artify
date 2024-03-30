import React from 'react'
import Image from 'next/image'
import logo from '@/assets/Logo.svg'
import Typography from '@/components/elements/Typography'
import Link from 'next/link'
import { Button } from '@/components/elements/Button'
import Input from '@/components/elements/Input'
import imgSrc from '@/assets/backgrounds/bg-3.png'
import Divider from '@/components/elements/Divider'

const page = () => {
  return (
    <div className='flex justify-between h-screen'>
      <div className='flex flex-col justify-between p-12 w-[60%]'>
        <Image src={logo} alt='logo' width={32} height={32} />
        <div className='px-28 flex flex-col gap-5'>
          <Typography size='xl' variant='regular'>
            Join or Create a Workspace
          </Typography>
          <Typography className='mb-10 text-lg text-gray-light-100' variant='medium'>
            Connect with others by joining an existing workspace or create a new one to collaborate with your team.
          </Typography>

          <div className='flex gap-2 items-center'>
            <Input placeholder='.artificium.app' className='w-[410px]' />
            <Button>Join Workspace</Button>
          </div>
          <div className='grid grid-cols-3 items-center my-5'>
            <Divider />
            <Typography
              className='text-[12px] tracking-[0.15px] text-noble-black-400 text-center'
              size='sm'
              variant='medium'
            >
              or
            </Typography>
            <Divider />
          </div>
          <Button color={'gray'}>Create new Workspace</Button>
        </div>
        <div className='flex items-center justify-between'>
          <Typography variant='medium' className='text-gray-light-100 text-sm'>
            Artificium.app © 2024
          </Typography>
          <Link href={'#'}>
            <Typography variant='medium' className='text-gray-light-100 text-sm'>
              Privacy Policy
            </Typography>
          </Link>
        </div>
      </div>

      {/* Right Side */}
      <Image src={imgSrc} alt='background' width={50} height={330} unoptimized className='w-[40%] h-screen' />
    </div>
  )
}

export default page

import React from 'react'
{
  /* Components */
}
import Typography from '@/components/elements/Typography'
import Link from 'next/link'
import { Button } from '@/components/elements/Button'
import Checkbox from '@/components/elements/Checkbox'
import Input from '@/components/elements/Input'
{
  /* Image */
}
import Image from 'next/image'
import imgSrc from '@/assets/backgrounds/bg-3.png'
import logo from '@/assets/Logo.svg'

const page = () => {
  return (
    <div className='flex justify-between h-screen'>
      <div className='flex flex-col justify-between p-12 w-[60%]'>
        <div className='flex items-center justify-between'>
          <Image src={logo} alt='logo' width={32} height={32} />
          <Typography theme='blueGreen600' variant='bold'>
            Log In
          </Typography>
        </div>
        <div className='px-28 flex flex-col gap-5'>
          <Typography size='xl' className='mb-10' variant='regular'>
            Connect with your team and bring your creative ideas to life.
          </Typography>
          <div className='grid grid-cols-2 gap-4'>
            <Input />
            <Input />
            <Input />
            <Input />
          </div>
          <Checkbox>
            I agree with <Typography theme='blueGreen600'>Terms and conditions</Typography>
          </Checkbox>
          <Button>Create free account</Button>
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

import React from 'react'
{
  /* Components */
}
import Typography from '@/components/elements/Typography'
import Input from '@/components/elements/Input'
import { Button } from '@/components/elements/Button'
import Divider from '@/components/elements/Divider'
import SocialButton from '@/components/elements/SocialButton'
import Checkbox from '@/components/elements/Checkbox'
{
  /* Image */
}
import Image from 'next/image'
import imgSrc from '@/assets/backgrounds/bg-4.png'
import logo from '@/assets/Logo.svg'

const Login = () => {
  return (
    <div className='grid md:grid-cols-2 h-screen'>
      <div className='p-12 px-4 md:px-20 flex flex-col gap-10'>
        <Image src={logo} alt='logo' width={32} height={32} />
        <div className='md:px-20'>
          <div className='flex flex-col gap-4'>
            <Typography size='xl' variant='regular'>
              Hello, <span className='bg-clip-text bg-blue-green-600 text-transparent font-bold'>Mikołaj!</span>
            </Typography>
            <Typography size='xs' variant='medium' className='text-gray-light-100'>
              Log in to Artificium to start creating magic.
            </Typography>
            <div className='grid grid-cols-2 items-center gap-4'>
              <SocialButton variant='GOOGLE'>Google Account</SocialButton>
              <SocialButton variant='APPLE'>Apple Account</SocialButton>
            </div>
            <div className='grid grid-cols-3 items-center my-5'>
              <Divider className='bg-noble-black-400' />
              <Typography
                className='text-[12px] tracking-[0.15px] text-noble-black-400 text-center'
                size='sm'
                variant='medium'
              >
                or continue with
              </Typography>
              <Divider className='bg-noble-black-400' />
            </div>
            <div className='my-4 flex flex-col gap-4'>
              <Input placeholder='Enter your email' />
              <Input placeholder='Enter your password' />
            </div>
            <div className='flex items-center justify-between mb-4'>
              <Checkbox>Rememeber Me</Checkbox>
              <Typography variant='semibold' className='bg-clip-text dark:bg-blue-green-500 bg-blue-green-700 text-transparent text-base'>
                Forgot Password?
              </Typography>
            </div>
            <Button>Log in</Button>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <Image src={imgSrc} alt='background' width={50} height={330} unoptimized className='w-[100%] h-screen' />
    </div>
  )
}

export default Login

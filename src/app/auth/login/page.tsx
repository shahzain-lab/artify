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
  /* Images */
}
import Image from 'next/image'
import imgSrc from '@/assets/backgrounds/bg-1.png'
import logo from '@/assets/Logo.svg'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='grid md:grid-cols-2 h-screen'>
      <div className='py-12 px-4 md:px-20 flex flex-col justify-between'>
        <Image src={logo} alt='logo' width={32} height={32} />
        <div className='md:px-20 my-5'>
          <div className='flex flex-col gap-4'>
            <Typography size='xl' variant='regular'>
              Let&apos;s get{' '}
              <span className='bg-clip-text bg-blue-green-500 text-transparent font-bold'>creative!</span>
            </Typography>
            <Typography size='xs' variant='medium' className='text-gray-light-200'>
              Log in to Artificium to start creating magic.
            </Typography>
            <div className='my-4 flex flex-col gap-4'>
              <Input placeholder='Enter your email' />
              <Input placeholder='Enter your password' />
            </div>
            <div className='flex items-center justify-between mb-5'>
              <Checkbox>Rememeber Me</Checkbox>
              <Typography variant='semibold' className='bg-clip-text dark:bg-blue-green-500 bg-blue-green-700 text-transparent text-base'>
                Forgot Password?
              </Typography>
            </div>
            <Button>Log in</Button>
          </div>

          <div className='grid grid-cols-3 items-center my-8'>
            <Divider className='bg-noble-black-400'  />
            <Typography
              className='text-[12px] tracking-[0.15px] text-noble-black-400 text-center'
              size='sm'
              variant='medium'
            >
              or continue with
            </Typography>
            <Divider className='bg-noble-black-400' />
          </div>

          <div className='grid grid-cols-2 items-center gap-4'>
            <SocialButton variant='GOOGLE'>Google Account</SocialButton>
            <SocialButton variant='APPLE'>Apple Account</SocialButton>
          </div>
        </div>
        <div>
          <Typography className='text-noble-black-400 text-base'>
            Don&apos;t have an account?{' '}
            <Link href={'/auth/register'}><span className='bg-clip-text dark:bg-blue-green-500 bg-blue-green-700 text-transparent text-bold'>Sign Up</span></Link>
          </Typography>
        </div>
      </div>
      {/* Right Side */}
      <div className='w-full flex justify-end'>
        <Image src={imgSrc} alt='background' width={850} height={850} unoptimized className='w-full md:w-[80%] h-screen' />
      </div>
    </div>
  )
}

export default Login

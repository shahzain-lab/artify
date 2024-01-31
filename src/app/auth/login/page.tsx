import Image from 'next/image'
import React from 'react'
import imgSrc from '@/assets/backgrounds/bg-1.png'
import logo from '@/assets/Logo.svg'
import Typography from '@/components/ui/Typography'
import Input from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import Divider from '@/components/ui/Divider'
import SocialButton from '@/components/ui/SocialButton'
import Checkbox from '@/components/ui/Checkbox'

const Login = () => {
  return (
    <div className='grid grid-cols-2 h-screen'>
        <div className='p-12 px-20 flex flex-col justify-between'>
          <Image 
             src={logo}
             alt='logo'
             width={32}
             height={32}
          />

          <div className='px-20'>
              <div className='flex flex-col gap-4'>
                <Typography size='xl' variant='regular'>Let's get {" "}
                  <span className='bg-clip-text bg-blue-green-500 text-transparent font-bold'>creative!</span>
                </Typography>
                <Typography size='xs' variant='medium' className='text-gray'>Log in to Artificium to start creating magic.</Typography>
                <div className='my-4 flex flex-col gap-4'>
                  <Input />          
                  <Input /> 
                </div>
                <div className='flex items-center justify-between mb-5'>
                  <Checkbox>Rememeber Me</Checkbox>
                  <Typography variant='semibold' className='bg-clip-text bg-blue-green-500 text-transparent text-base'>Forgot Password?</Typography>  
                </div> 
                <Button>Log in</Button>      
              </div>

              <div className='grid grid-cols-3 items-center my-8'>
                <Divider />
                <Typography className='text-[12px] tracking-[0.15px] text-gray-light text-center' size='sm' variant='medium'>or continue with</Typography>
                <Divider />
              </div>

              <div className='grid grid-cols-2 items-center gap-4'>
                <SocialButton variant='GOOGLE'>Google Account</SocialButton>
                <SocialButton variant='APPLE'>Apple Account</SocialButton>
              </div>
            </div>

            <div>
              <Typography className='text-gray-light text-base'>Don&apos;t have an account? <span className='bg-clip-text bg-blue-green-500 text-transparent text-bold'>Sign Up</span></Typography>
            </div>
          </div>
        
        {/* Right Side */}
        <Image 
           src={imgSrc}
           alt='background'
           width={50}
           height={330}
           unoptimized
           className='w-[100%] h-screen'
        />
    </div>
  )
}

export default Login
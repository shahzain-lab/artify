import React from 'react'
{
  /* Components */
}
import Image from 'next/image'
import Typography from '@/components/elements/Typography'
import Link from 'next/link'
import { Button } from '@/components/elements/Button'
{
  /* Avatars */
}
import user1 from '@/assets/avatars/Avatar-1.png'
import user2 from '@/assets/avatars/Avatar-2.png'
import user3 from '@/assets/avatars/Avatar-3.png'
import user4 from '@/assets/avatars/Avatar-4.png'
import user5 from '@/assets/avatars/Avatar-5.png'
import user6 from '@/assets/avatars/Avatar-6.png'
import logo from '@/assets/Logo.svg'
import imgSrc from '@/assets/backgrounds/bg-2.png'

const page = () => {
  const avatars = [user1, user2, user3, user4, user5, user6]
  return (
    <div className='flex justify-between h-screen'>
      <div className='p-12 px-20 flex flex-col justify-between w-[60%]'>
        <Image src={logo} alt='logo' width={32} height={32} />

        <div className='flex flex-col text-center items-center gap-4 px-24'>
          <div className='flex'>
            {avatars.map((avatar, i: number) => (
              <div key={i} className='-ml-5'>
                <Image src={avatar} alt='' width={64} height={64} />
              </div>
            ))}
          </div>
          <Typography size='lg' variant='medium'>
            Sophia, Kamil, Emily and 2,012 others are already here!
          </Typography>
          <Typography className='text-gray-light-100 text-lg' variant='medium'>
            But... it looks like you don&apos;t have access to this workspace.
          </Typography>
          <Button>Request access </Button>
          <Typography variant='medium' className='text-noble-black-400 text-[12px]'>
            or
          </Typography>
          <Button color={'gray'}>Back</Button>
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
      <div className='w-[40%] h-screen flex justify-end'>
        <Image
          src={imgSrc}
          alt='background'
          width={imgSrc.width}
          height={imgSrc.height}
          unoptimized
          className='w-[90%] h-full'
        />
      </div>
    </div>
  )
}

export default page

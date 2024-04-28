'use client'
import React from 'react'
import Typography from '@/components/elements/Typography'
import Link from 'next/link'
{
  /* Images */
}
import Image from 'next/image'
import cog from '@/assets/icons/cog.svg'
import avatar from '@/assets/avatars/Avatar-7.png'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const Settings = () => {
  const { theme } = useTheme()
  return (
    <div className={cn(
      'setting-widget',
      'p-4 rounded-[16px] flex items-center z-20 md:z-auto justify-between',
      theme === 'light' ? 'bg-gray-100' : 'bg-glass-fill'
    )}>
      <div className='flex items-center gap-3'>
        <Image src={avatar} alt='user' width={48} height={48} />
        <div className='flex flex-col'>
          <Typography variant='semibold'>Ryan Lee</Typography>
          <Typography variant='medium' className='text-[12px] text-theme-greenish'>
            Premium
          </Typography>
        </div>
      </div>
      <Link href={'/profile'}>
        <Image src={cog} alt='cog' width={24} height={24} />
      </Link>
    </div>
  )
}

export default Settings

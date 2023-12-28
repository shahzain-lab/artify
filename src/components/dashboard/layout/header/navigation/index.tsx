import React from 'react'
import { IMenuItems } from './items'
import Image from 'next/image'
import Typography from '@/components/ui/Typography'
import { cn } from '@/lib/utils'

const Navigation = () => {

  return (
    <div className='px-6 flex items-center gap-6'>
      {IMenuItems.map((item) => (
        <div className={cn(
          'flex items-start justify-start pt-5 pb-4',
          item.active ? 'border-b-[3px] border-theme-primary' : ''
        )}>
          {item.icon ? (
              <Image 
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className='-mb-3 -ml-2'
              />
          ):null}
          <Typography variant='semibold' className='text-sm'>{item.title}</Typography>
          </div>
      ))}
    </div>
  )
}

export default Navigation
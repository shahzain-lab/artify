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
          'flex items-center justify-start h-20 gap-3',
          item.active ? 'border-b-[3px] border-theme-primary' : ''
        )}>
          {item.icon ? (
              <Image 
                src={item.icon}
                alt={item.title}
                width={22}
                height={22}
                className=''
              />
          ):null}
          <Typography variant='semibold' className='text-sm'>{item.title}</Typography>
          </div>
      ))}
    </div>
  )
}

export default Navigation
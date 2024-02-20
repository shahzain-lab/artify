'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { IMenu } from './header/navigation/items'
import Typography from '@/components/ui/Typography'

interface Props {
    route: IMenu
    index: number
    active: number
    setChange: (i: number) => void
}

const PanalRoute = ({ route, index, active, setChange }: Props) => {
    return (
        <div
          onClick={() => setChange(index)} 
          className={cn(
            'flex items-center justify-start h-14 md:h-20 gap-1 md:gap-3',
            'cursor-pointer',
            index === active ? 'border-b-[3px] border-theme-primary' : ''
        )}>
            {route.Icon ? (
                <p className='w-4 h-4'>
                    <route.Icon />
                </p>
            ) : null}
            <Typography variant='semibold' className='text-[11px] md:text-sm'>{route.title}</Typography>
        </div>
    )
}

export default PanalRoute
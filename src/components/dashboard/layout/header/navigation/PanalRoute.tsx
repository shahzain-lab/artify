'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'
import { IMenu } from './items'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import Typography from '@/components/ui/Typography'
import { setPanalRoute } from '@/store/slices/navigationSlice'

interface Props {
    route: IMenu
    index: number
}

const PanalRoute = ({ route, index }: Props) => {
    const panalRoute = useSelector((state: RootState) => state.navigation.panalRoute)
    const dispatch = useDispatch()

    return (
        <div
          onClick={() => dispatch(setPanalRoute(index))} 
          className={cn(
            'flex items-center justify-start h-20 gap-3',
            'cursor-pointer',
            index === panalRoute ? 'border-b-[3px] border-theme-primary' : ''
        )}>
            {route.icon ? (
                <Image
                    src={route.icon}
                    alt={route.title}
                    width={22}
                    height={22}
                    className=''
                />
            ) : null}
            <Typography variant='semibold' className='text-sm'>{route.title}</Typography>
        </div>
    )
}

export default PanalRoute
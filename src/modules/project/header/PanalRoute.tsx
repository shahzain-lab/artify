import { cn } from '@/lib/utils'
import React from 'react'
import Typography from '@/components/elements/Typography'
import { IMenu } from './navigation/items'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface Props {
    route: IMenu
}

const PanalRoute = ({ route }: Props) => {
    const pathname = usePathname()
    return (
        <Link
          href={route.path}
          className={cn(
            'flex items-center justify-start h-14 md:h-20 gap-1 md:gap-3',
            'cursor-pointer',
            pathname === route.path ? 'border-b-[3px] border-theme-greenish' : ''
        )}>
            {route.Icon ? (
                <p className='w-4 h-4'>
                    <route.Icon />
                </p>
            ) : null}
            <Typography variant='semibold' className='text-[11px] md:text-sm'>{route.title}</Typography>
        </Link>
    )
}

export default PanalRoute
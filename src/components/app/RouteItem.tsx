import React from 'react'
{
  /* Components */
}
import Typography from '@/components/elements/Typography'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IMenu } from '@/modules/project/header/navigation'
{
  /* Utils */
}
import { cn } from '@/lib/utils'

interface Props {
  route: IMenu
}

const PanalRoute = ({ route }: Props) => {
  const pathname = usePathname()
  return (
    <Link
      href={route.path}
      className={cn('cursor-pointer', pathname === route.path ? 'border-b-[3px] border-theme-greenish' : '')}
    >
      <div className={cn('flex items-center justify-start w-24 md:w-auto h-14 md:h-16 gap-2')}>
        {route.icon ? <p>{route.icon}</p> : null}
        <Typography variant='semibold' className='text-[11px] md:text-sm'>
          {route.title}
        </Typography>
      </div>
    </Link>
  )
}

export default PanalRoute

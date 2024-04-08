import React from 'react'
import { cn } from '@/lib/utils'

interface Props {
  className?: string
}

const Divider = ({ className }: Props) => {
  return <div className={cn('h-[0.5px] dark:bg-noble-black-500 w-full', className)}></div>
}

export default Divider

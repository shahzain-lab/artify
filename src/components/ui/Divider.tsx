import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
    className?: string
}

const Divider = ({className}: Props) => {
  return (
    <div className={cn(
        'h-[0.5px] bg-[#363A3D]',
        className
    )}></div>
  )
}

export default Divider
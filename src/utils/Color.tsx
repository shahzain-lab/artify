import React from 'react'
import { cn } from '@/lib/utils'

interface Props {
  title: string
  color: string
}

const Color = ({ color }: Props) => {
  return <div className={cn(color, 'text-sm text-gray-400 px-5 py-3')}>{color?.replace('bg-', '')}</div>
}

export default Color

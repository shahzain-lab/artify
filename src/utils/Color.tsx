import { cn } from '@/lib/utils';
import React from 'react'

interface Props {
    title: string;
    color: string;
}

const Color = ({ title, color }: Props) => {
  return (
    <div className={cn(color, 'text-sm text-gray-400 px-5 py-3')}>{color?.replace('bg-','')}</div>
  )
}

export default Color
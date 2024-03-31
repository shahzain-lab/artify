import React from 'react'
{
  /* Utils */
}
import { cn } from '@/lib/utils'

interface Props {
  className?: string
  children?: React.ReactNode
  align?:
    | 'item-center'
    | 'item-between'
    | 'item-start'
    | 'item-end'
    | 'item-col-start'
    | 'item-col-between'
    | 'item-col-center'
    | 'item-col-end'
  alignSM?:
    | 'item-center'
    | 'item-between'
    | 'item-start'
    | 'item-end'
    | 'item-col-start'
    | 'item-col-between'
    | 'item-col-center'
    | 'item-col-end'
}

const contentAlignment = {
  'item-center': 'flex flex-row items-center justify-center',
  'item-between': 'flex flex-row justify-between items-center',
  'item-start': 'flex flex-row items-center justify-start',
  'item-end': 'flex flex-row items-center justify-end',
  'item-col-start': 'flex flex-col items-start justify-start',
  'item-col-between': 'flex flex-col items-start justify-between',
  'item-col-center': 'flex flex-col items-center justify-center',
  'item-col-end': 'flex flex-col items-center justify-end'
}

const SimpleCard = ({ className, children, align, alignSM }: Props) => {
  return (
    <div
      className={cn(
        'p-4 bg-noble-black-800 rounded-3xl',
        alignSM && contentAlignment[alignSM],
        align && contentAlignment[align].split(' ').join(' md:'),
        className
      )}
    >
      {children}
    </div>
  )
}

export default SimpleCard

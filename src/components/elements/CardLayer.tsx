import React from 'react'
{
  /* Components */
}
import Typography from './Typography'
import Divider from './Divider'
{
  /* Utils */
}
import { cn } from '@/lib/utils'

interface Props {
  title: string
  children: React.ReactNode
  className?: string
}

const CardLayer = ({ title, children, className }: Props) => {
  return (
    <main className={cn('flex flex-col gap-3 items-start bg-noble-black-600 rounded-[10px] p-3 ', className)}>
      <Typography>{title}</Typography>
      <Divider />
      {children && <>{children}</>}
    </main>
  )
}

export default CardLayer
